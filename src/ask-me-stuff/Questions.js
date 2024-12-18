import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { ReactTyped } from 'react-typed';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "@fontsource/roboto-mono"; // Import the font
import { Typography } from "@mui/material";



function Questions({ clicked, setClicked }) {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const questionsAndAnswers = [
        { 
            id: 1,
            question: 'What inspired you to start a career in web development?', 
            answer:
             `My passion for technology started when I received my first laptop at 12,
              leading me to create videos with Adobe After Effects and master Microsoft Programs.
               Web development blends my creativity with my love for problem-solving. I enjoy coming up with
                innovative ideas and bringing them to life through code, paying close attention to detail.
                 The constant evolution of web technologies keeps me excited and driven to keep learning and growing in
                  this dynamic field.` 
        },
        { 
            id: 2,
            question: `Can you describe a project you're particularly proud of and why?`,
             answer: 
             `Yes, my latest project, "Smart Inventory," stands out. This inventory management app, built with React, Rails, 
             and PostgreSQL, streamlines inventory control for business owners. It includes features like purchase order tracking,
              real-time stock updates, and detailed analytics, with email notifications via SendGrid and deployment on Heroku.
             I'm proud of this project because, despite being initially overwhelmed by its complexity,
              I tackled each challenge one step at a time. This experience taught me a lot and significantly improved my client's 
              business operations.`
            },
        { 
            id: 3, 
            question: 'How do you stay updated with the latest trends and technologies in web development?', 
            answer: 
            `I stay updated through a mix of sources: discussions with friends, social media platforms like X
             (formerly Twitter), YouTube tutorials, and WhatsApp groups.`
        },
        {
             id: 4,
            question: 'What challenges have you faced in web development, and how did you overcome them?', 
            answer: 
            `In the early stages of my tech career, my biggest challenges were basic issues like syntax errors and understanding
             error messages. My sheer will and passion for technology helped me push through these obstacles.
             Now, with more experience and tools at my disposal, I tackle challenges by following structured problem-solving patterns.
             Confidence plays a key role. Often, the solution is right in front of you; taking a break, getting a drink of water,
            and approaching the problem with a clear mind can make all the difference.`,
        },
        { 
            id: 5, 
            question: 'How do you approach problem-solving when faced with a difficult coding issue?', 
            answer: 
            `I start by understanding the application's flow, from start to finish. This clarity makes it easier to pinpoint issues.
             I utilize resources like Google and YouTube for guidance. If I'm still stuck, I reach out to my knowledgeable friends
              in the tech community. Understanding errors and their context is crucial to finding effective solutions.`
        },
        { 
            id: 6, 
            question: "What is your process for learning and adapting to new technologies?",
            answer: 
            `I start with tools like Google, Stack Overflow, and official documentation sites. I also use ChatGPT, though I try not
             to rely too heavily on it. If I’m still stuck, YouTube tutorials are always helpful.`
        },
        { 
            id: 7, 
            question: "How do you ensure your code is both functional and maintainable?",
            answer: 
            `I ensure my code is functional and maintainable by writing tests and using the latest features of the application before
             pushing changes. I also comment extensively to enhance readability. While I strive to make my code dynamic,
              I’m mindful of balancing this with clarity to ensure it’s understandable for others.`
        },
        { 
            id: 8, 
            question: "What do you think are the most important qualities for a web developer to have?",
            answer: 
            `Patience, critical thinking, and creativity are essential qualities for a web developer. 
            Being a good person and easy to work with is also crucial. Additionally, having a genuine love for the technology
             you're working with, strong problem-solving skills, adaptability to new tools and trends, and effective communication
              are key traits that make a successful web developer.`
        },
        { 
            id: 9, 
            question: "How do you handle feedback and criticism about your work?",
            answer: 
            `Positive feedback boosts my confidence and performance. When it comes to criticism, it's all about mindset.
             You can either take it negatively or use it as an opportunity to learn and grow. 
             I believe in treating everyone with respect, regardless of their background, which helps in handling criticism 
             constructively.`
        },
        {
            id: 10,
            question: "How can I contact you?",
            answer: `
                Email: Levideutsch@live.com
                <br />
                LinkedIn: <a href="https://www.linkedin.com/in/levi-deutsch/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/levi-deutsch/</a>
            `
        },
    ];

    const handleQuestionClick = (question) => {
        setSelectedQuestion(question);
    };

    const handleBackClick = () => {
        setSelectedQuestion(null);
    };


    const cardStyle = {
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        color: "black"
    };
    
    const hoverStyle = {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    };

    return (
        <Dialog open={clicked} onClose={() => setClicked(false)}>
            <DialogContent>
                {selectedQuestion ? (   
                    <div style={{fontFamily: "Roboto Mono, monospace", paddingTop: '-35px'  }}>
                        <p 
                        style={{
                            // position: "fixed",
                            top: 0,
                            left: 0,
                            width: '100%', // Ensures the question spans the full width
                            backgroundColor: "white", // Optional: to make the text readable
                            padding: "10px",
                            fontWeight: "bold",
                            zIndex: 1000 // Ensures the question stays above other content
                            }}>
                        {selectedQuestion.question}
                        </p>
                        <ReactTyped strings={[selectedQuestion.answer]} typeSpeed={30} style={{ marginTop: '70px' }}/>
                        <div style={{buttom: 0, textAlign: "center", width: "100%", padding: "10px", }}>
                        <Button onClick={handleBackClick} style={{ marginTop: '30px', color: 'black', margin: "0 auto" }}>
                            <ArrowBackIosIcon fontSize='small'/>
                        </Button>
                        </div>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
             
                        <Typography style={{ fontSize: '30px', textAlign: "center" }}>Ask Me Stuff</Typography>
                        {questionsAndAnswers.map((item) => (
                            <Button
                            style={cardStyle}
                                key={item.id}
                                onClick={() => handleQuestionClick(item)}
                                onMouseOver={(e) => e.currentTarget.style.transform = hoverStyle.transform}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}    

                            >
                                {item.question}
                            </Button>

                        ))}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}

export default Questions;




