import React,{useState} from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Question from '@/shared/Question';
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label";
import AnimatedNumbers from "react-animated-numbers";
import { Separator } from "@/components/ui/separator"
import ConfettiExplosion from 'react-confetti-explosion';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

const Quiz = () => {
    const confettiOptions = {
        force: 0.9,
        duration: 6000,
        particleCount: 100,
        width: 800,
    }
    const [question,setQuestion] = useState(1);
    const [answers,setAnswers] = useState([]);
    const [quizdone,setQuizdone] = useState(false);
    const [score,setScore] = useState(0);
    const quiz = [
        // Operating Systems
        {text:'What is an Operating System?', options:['Software that manages hardware','Compiler','Assembler','Network'], answer:'Software that manages hardware'},
        {text:'Which of the following is not an OS?', options:['Windows','Linux','Oracle','MacOS'], answer:'Oracle'},
        {text:'What is a process?', options:['Program in execution','A compiler','Operating System task','Software'], answer:'Program in execution'},
        {text:'Which of these is a real-time OS?', options:['Windows 10','Linux Mint','RTOS','MacOS'], answer:'RTOS'},
        {text:'What is a thread?', options:['Lightweight process','A program','Main process','Scheduler'], answer:'Lightweight process'},
        {text:'What is the primary purpose of an OS?', options:['Manage system resources','Compile code','Assemble programs','Run applications'], answer:'Manage system resources'},
        {text:'Which of the following is a Linux distribution?', options:['Ubuntu','Windows','Oracle','MacOS'], answer:'Ubuntu'},
        {text:'What is multitasking in OS?', options:['Running multiple processes','Running a single task','Compiling code','Executing a single thread'], answer:'Running multiple processes'},
        {text:'Which scheduling algorithm is preemptive?', options:['Round Robin','FCFS','SJF','FIFO'], answer:'Round Robin'},
        {text:'What is virtual memory?', options:['Simulated memory','Physical memory','External storage','Memory card'], answer:'Simulated memory'},
        // Computer Networks
        {text:'What does TCP stand for?', options:['Transmission Control Protocol','Transfer Connection Protocol','Transmission Connection Protocol','None'], answer:'Transmission Control Protocol'},
        {text:'What is an IP address?', options:['Unique identifier for a device','A software','A hardware','None'], answer:'Unique identifier for a device'},
        {text:'What is DNS?', options:['Domain Name System','Dynamic Network System','Digital Network Service','Domain Node Service'], answer:'Domain Name System'},
        {text:'Which protocol is used to send emails?', options:['SMTP','HTTP','FTP','IMAP'], answer:'SMTP'},
        {text:'What is the use of a router?', options:['Connects networks','Compiles programs','Manages files','Runs programs'], answer:'Connects networks'},
        {text:'What is HTTP?', options:['Hypertext Transfer Protocol','Hyper Transfer Text Protocol','High Text Transfer Protocol','None'], answer:'Hypertext Transfer Protocol'},
        {text:'Which layer of OSI is responsible for routing?', options:['Network Layer','Application Layer','Transport Layer','Physical Layer'], answer:'Network Layer'},
        {text:'What does FTP stand for?', options:['File Transfer Protocol','File Text Protocol','File Time Protocol','None'], answer:'File Transfer Protocol'},
        {text:'What is a MAC address?', options:['Unique hardware address','IP address','Protocol address','Server address'], answer:'Unique hardware address'},
        {text:'Which of these is a network topology?', options:['Star','Linux','Python','Windows'], answer:'Star'},
        // OOP Concepts
        {text:'What does OOP stand for?', options:['Object-Oriented Programming','Operator Overloading Programming','Object Over Process','None'], answer:'Object-Oriented Programming'},
        {text:'What is encapsulation?', options:['Wrapping data and methods together','Hiding data','Overloading methods','Abstracting data'], answer:'Wrapping data and methods together'},
        {text:'What is inheritance?', options:['Acquiring properties of a class','Writing multiple classes','Declaring variables','Creating new functions'], answer:'Acquiring properties of a class'},
        {text:'What is polymorphism?', options:['Ability to take multiple forms','Writing multiple methods','Inheriting multiple classes','Encapsulation'], answer:'Ability to take multiple forms'},
        {text:'Which keyword is used to inherit a class in Java?', options:['extends','inherit','super','this'], answer:'extends'},
        {text:'What is abstraction?', options:['Hiding implementation details','Wrapping data','Inheritance','Overloading'], answer:'Hiding implementation details'},
        {text:'What is a class in OOP?', options:['Blueprint for objects','An instance','A function','A variable'], answer:'Blueprint for objects'},
        {text:'What is an object?', options:['Instance of a class','A class','A function','A variable'], answer:'Instance of a class'},
        {text:'What is a constructor?', options:['Special method to initialize objects','A variable','A function','An operator'], answer:'Special method to initialize objects'},
        {text:'Which of these is not a principle of OOP?', options:['Compilation','Encapsulation','Polymorphism','Abstraction'], answer:'Compilation'},
        // Additional Questions
        {text:'What is process synchronization?', options:['Coordination between processes','Running a single process','Compiling processes','Stopping processes'], answer:'Coordination between processes'},
        {text:'What is a semaphore?', options:['Synchronization tool','A variable','A function','A thread'], answer:'Synchronization tool'},
        {text:'What is the purpose of paging in OS?', options:['Memory management','Process scheduling','File management','Device management'], answer:'Memory management'},
        {text:'Which protocol is used for secure communication?', options:['HTTPS','HTTP','FTP','SMTP'], answer:'HTTPS'},
        {text:'What is a switch in networking?', options:['Device to connect multiple devices','Software for routing','An operating system','Protocol'], answer:'Device to connect multiple devices'},
        {text:'What is a gateway?', options:['Device for connecting different networks','Protocol','Router','Switch'], answer:'Device for connecting different networks'},
        {text:'What is the use of abstraction in OOP?', options:['Hide complexity','Increase speed','Compile code','Add variables'], answer:'Hide complexity'},
        {text:'Which language does not support OOP?', options:['C','Java','Python','C++'], answer:'C'},
        {text:'What is the purpose of a destructor?', options:['Release resources','Initialize objects','Compile code','Execute threads'], answer:'Release resources'},
        {text:'What is the purpose of the "this" keyword?', options:['Refer to current object','Refer to superclass','Refer to method','Refer to function'], answer:'Refer to current object'},
        {text:'What is a deadlock?', options:['Processes waiting indefinitely','Running multiple processes','Synchronizing processes','Executing threads'], answer:'Processes waiting indefinitely'},
        {text:'Which of the following is a transport layer protocol?', options:['TCP','IP','HTTP','FTP'], answer:'TCP'},
        {text:'What is the default port for HTTP?', options:['80','21','443','25'], answer:'80'},
        {text:'What is an abstract class?', options:['Class with abstract methods','A function','A variable','A thread'], answer:'Class with abstract methods'},
        {text:'What is the difference between TCP and UDP?', options:['TCP is connection-oriented; UDP is connectionless','TCP is faster','UDP is connection-oriented','None'], answer:'TCP is connection-oriented; UDP is connectionless'},
        {text:'Which OSI layer ensures reliable communication?', options:['Transport','Network','Physical','Application'], answer:'Transport'},
        {text:'What is the purpose of inheritance?', options:['Reuse code','Increase speed','Compile code','Create threads'], answer:'Reuse code'},
        {text:'What is the purpose of a stack in OS?', options:['Store function calls','Compile code','Manage memory','Run threads'], answer:'Store function calls'},
        {text:'What is the function of an operating system kernel?', options:['Manages hardware and software','Compiles programs','Executes user commands','Manages files'], answer:'Manages hardware and software'},
        {text:'What does ICMP stand for?', options:['Internet Control Message Protocol','Internet Communication Management Protocol','Inter Communication Message Protocol','None'], answer:'Internet Control Message Protocol'}
    ];
    
    
    const saveAnswer = (e,q) => {
        let newAnswers = answers;
        newAnswers.push({
            question:q,answer:e
        });
        setAnswers(newAnswers);
        if(e){setScore(score + 1)}
        if(question < quiz.length){
            setQuestion(question + 1);
        }
        if(question == quiz.length){
            setQuizdone(true);
        }
    }
    return (
        <Card>
        <CardHeader>
            {!quizdone && <div>
            <Progress className='h-[2px] mb-5 opacity-50' value={question * 100 / quiz.length} />
            <CardTitle className='text-sm'>Question {question}/{quiz.length}</CardTitle>
            </div>}
        </CardHeader>
        <CardContent>
            <div className='w-[400px]'>

                {!quizdone && quiz.map((x,i) => {
                    if((i + 1) == question){
                        return <Question key={i} data={x} save={(e)=>saveAnswer(e,(i+1))}></Question>
                    }
                })}

                {quizdone && <div className='flex flex-col items-center'>
                    <Label className='text-3xl'>Quiz Result</Label>
                    <Separator className="my-2" />
                    <ConfettiExplosion {...confettiOptions} />
                    <span className='text-2xl'>{score}/{quiz.length} Questions are correct !</span>
                    <AnimatedNumbers
                        transitions={(index) => ({
                            type: "spring",
                            duration: index + 0.1,
                        })}
                        animateToNumber={score * 100}
                        fontStyle={{
                            fontSize: 60,
                        }}
                    />
                    
                    <span className='text-2xl'>Points</span>
                    
                        <Link to='/'><Button className='mt-5'>Back to Home</Button></Link>
                    
                </div>

                }

            </div>
        </CardContent>
        </Card>
    );
}

export default Quiz;
