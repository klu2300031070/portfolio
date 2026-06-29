import React, { useEffect, useRef } from 'react';
import './Shapes.css';

const Shapes = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let animationFrameId;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        const gridSpacing = 60; // Increased spacing for a 'wider' feel
        const binaries = [];
        const binaryCount = 35; // Slightly fewer but larger
        const circuits = [];
        const circuitCount = 12;

        class BinaryStream {
            constructor() {
                this.x = 0;
                this.y = 0;
                this.speed = 0;
                this.chars = [];
                this.opacity = 0;
                this.fontSize = 0;
                this.reset();
            }

            reset() {
                this.x = Math.floor(Math.random() * (canvas.width / gridSpacing)) * gridSpacing;
                this.y = Math.random() * canvas.height;
                this.speed = Math.random() * 2 + 1;
                const codingSymbols = [
                    '{', '}', '[', ']', '(', ')', ';', '=>', '++', '&&', '||', 
                    'const', 'fn', 'git', 'npm', 'api', 'sql', 'html', 'css', 'js',
                    'true', 'false', 'null', 'void', 'let', 'import', 'export', 'return',
                    'if', 'else', 'for', 'while', '===', '&&', '||', '<', '>', '/'
                ];
                this.chars = Array.from({ length: 12 }, () => codingSymbols[Math.floor(Math.random() * codingSymbols.length)]);
                this.opacity = Math.random() * 0.4 + 0.1;
                this.fontSize = Math.floor(Math.random() * 8) + 14; // Sized slightly smaller to accommodate words
            }

            update() {
                this.y += this.speed;
                if (this.y > canvas.height + 250) {
                    this.reset();
                    this.y = -150;
                }
            }

            draw() {
                ctx.font = `bold ${this.fontSize}px 'Courier New'`; // Added bold
                ctx.fillStyle = `rgba(0, 242, 255, ${this.opacity * 0.7})`; // Neon Cyan with slightly reduced opacity for elegance
                this.chars.forEach((char, i) => {
                    ctx.fillText(char, this.x, this.y - (i * 22));
                });
            }
        }

        class CircuitLine {
            constructor() {
                this.x = 0;
                this.y = 0;
                this.length = 0;
                this.speed = 0;
                this.direction = '';
                this.progress = 0;
                this.opacity = 0;
                this.reset();
            }

            reset() {
                this.x = Math.floor(Math.random() * (canvas.width / gridSpacing)) * gridSpacing;
                this.y = Math.floor(Math.random() * (canvas.height / gridSpacing)) * gridSpacing;
                this.length = Math.random() * 150 + 100; // Increased length
                this.speed = Math.random() * 2 + 1.5;
                this.direction = Math.random() > 0.5 ? 'h' : 'v';
                this.progress = 0;
                this.opacity = Math.random() * 0.7 + 0.3;
            }

            update() {
                this.progress += this.speed;
                if (this.progress > this.length + 600) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.shadowBlur = 15; // Increased glow
                ctx.shadowColor = 'rgba(224, 86, 253, 0.9)'; // Neon Magenta Glow
                ctx.strokeStyle = `rgba(224, 86, 253, ${this.opacity})`;
                ctx.lineWidth = 4; // Increased line width

                if (this.direction === 'h') {
                    ctx.moveTo(this.x + this.progress - 70, this.y);
                    ctx.lineTo(this.x + this.progress, this.y);
                } else {
                    ctx.moveTo(this.x, this.y + this.progress - 70);
                    ctx.lineTo(this.x, this.y + this.progress);
                }
                ctx.stroke();
                ctx.shadowBlur = 0;
            }
        }

        for (let i = 0; i < binaryCount; i++) binaries.push(new BinaryStream());
        for (let i = 0; i < circuitCount; i++) circuits.push(new CircuitLine());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            binaries.forEach(b => {
                b.update();
                b.draw();
            });

            circuits.forEach(c => {
                c.update();
                c.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="shapes">
            <canvas
                ref={canvasRef}
                className="home__bg-canvas"
            />
        </div>
    );
};

export default Shapes;
