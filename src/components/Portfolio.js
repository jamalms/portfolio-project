import React from 'react';
import surveillance from "../images/surveillance.png";
import cinema from "../images/cinema.png";
import netflix from "../images/netflix.png";
import iCARE from "../images/iCARE.png";
import BinaryTree from "../images/BinaryTree.png";
import algorithems from "../images/algorithems.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUBOX
import { PopupboxContainer, PopupboxManager, } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

export const Portfolio = () => {

//Smart Surveillance 
const openPopupboxSmartSurveillance = () => { //  taskManager
 const content = (
  <>
  <img className="portfolio-image-popupbox" src={surveillance} alt="Smart Surveillance/Security System Project..."/>
  
  <p>The project aims to design and develop distributed systems by creating a set of protocols / messages and building a reference implementation that simulates the operations of a smart, automated environment.<br />
  • Created a cost-effective system to replace CCTV system. <br />
  • Implemented technology in conjunction with a number of devices and sensors to continuously monitor closed regions 24/7, without need for a large-scale system or costly equipment (CCTV).<br />
  Technology Used:<br />
For Service Definitions and implementations - gRPC (protos).<br />
For Naming Services - jmDNS.<br />
Client - Graphical User Interface (GUI)<br />
  </p>
  
  <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamalms/Distributed-System-Project")}>https://github.com/jamalms/Distributed-System-Project</a>
  
  </>
 )
  PopupboxManager.open({content})
}

const popupboxConfigSmartSurveillance = {
  titleBar: {
    enable: true,
    text: "Smart Surveillance/Security System Project"
  },
  fadeIn: true,
  fadeInSpeed: 500
}


//Cinema Project
const openPopupboxCinema = () => { //  taskManager
  const content = (
   <>
   <img className="portfolio-image-popupbox" src={cinema} alt="Cinema Project..."/>
   
   <p>The project aims to develop an application that allows an employee to enter a persons’ age and then display the cost of a cinema ticket for that person based on their age.  <br />
   -Allow the user to check the cost of 2 tickets.  The application should accept the age from the user 2 times, calculating and outputting the cost each time.<br />
   -Ask the user how many tickets they would like to purchase.  The application should then allow the user to check the cost of that number of tickets.<br />  
   -Allow the user to check the cost of one ticket and then ask the user would they like to check another.  If they answer yes, the application should run again, if they answer no, the application should end.<br />
   -Keep a running total of all tickets that the user wishes to buy. When the programme exits the loop, the total cost should be displayed to the user.<br />
   -Modify Cinema5App so that there is an upper limit of 4 tickets per person.  When this limit is reached, the user should not be able to purchase any more tickets.<br />

   </p>
   <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamalms/Cinama-Application")}>https://github.com/jamalms/Cinama-Application</a>
   
   </>
  )
   PopupboxManager.open({content})
 }
 
 const popupboxConfigCinema = {
   titleBar: {
     enable: true,
     text: "Cinema App JAVA"
   },
   fadeIn: true,
   fadeInSpeed: 500
 }


 //Netflix Project
const openPopupboxMovie = () => { //  taskManager
  const content = (
   <>
   <img className="portfolio-image-popupbox" src={netflix} alt="Movie Project..."/>
      
   <p>Create a Node for a new LinkedList that is capable of representing a Movie. Each Node should
contain the following information: Movie Title, Movie Description, Genre, length in minutes,
and rating (1 - 5 star rating) The Node class should also provide a toString method to produce
the following String representation:  <br />
Movie Title
Description: This is a cool movie about trains
/Genre: Action
/Duration: 120
/Rating: 5
Construct a new LinkedList that uses this Node. The LinkedList class should contain the
following:<br />  
I. Reference to first and last Nodes – this references should enable for the
identification of the first and last nodes in the linkedlist <br /> 
II. isEmpty – this method should check if the linkedlist is empty and return a boolean<br /> 
III. genreSearch - this method should return a String representation of the movies
within the Linkedlist that are identified by the genre<br /> 
IV. get_average – this method should return the average star rating of all movies stored
within the LinkedList<br /> 
V. add - this method should allow the addition of a new Node into the linkedlist at the
end of the current list<br /> 
VI. remove - this method removes the first occurrence of the target Node. The target is
defined by Movie Title. You should take into account when no movie title is found<br /> 

   </p>
 
   <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamalms/MovieApp")}>https://github.com/jamalms/MovieApp</a>
   
   </>
  )
   PopupboxManager.open({content})
 }
 
 const popupboxConfigMovie = {
   titleBar: {
     enable: true,
     text: "Movie Application Data Structure LinkedList JAVA"
   },
   fadeIn: true,
   fadeInSpeed: 500
 }



  //iCARE Project
const openPopupboxiCARE = () => { //  taskManager
  const content = (
   <>
   <img className="portfolio-image-popupbox" src={iCARE} alt="iCARE Project..."/>

   <p>
 The project aims to develop a web application for telemedicine to conduct health services remotely by developing multiple applications that collect measurements and do management remotely. <br />
 • Created a Cardiac Application to track heart rate for patients with a high risk of developing arrhythmia.<br />
• Developed an Insulin Pump Application to regulate glucose monitoring and insulin infusion in response to glucose levels.<br />
• Designed a Ventilation Application with keen focus on assessing respiratory condition of mechanically ventilated patients by monitoring respiratory rate and oxygen saturation and directing requests to the ventilation machine.<br />
Technology Used:<br />
JavaScript | HTML | CSS | Angulary | Node.Js | Mongo Database | Google Maps API.
 </p>

   <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamalms/iCare")}>https://github.com/jamalms/iCare</a>
   
   </>
  )
   PopupboxManager.open({content})
 }
 
 const popupboxConfigiCARE = {
   titleBar: {
     enable: true,
     text: "iCARE A Telemedicine Application "
   },
   fadeIn: true,
   fadeInSpeed: 500
 }

   //BinaryTree Project
const openPopupboxBinaryTree = () => { //  taskManager
  const content = (
   <>
   <img className="portfolio-image-popupbox" src={BinaryTree} alt="BinaryTree Project..."/>

  <p>
  Create a new tree which can only store Strings. In that new class create a method which returns the length of all the strings in the tree. Create a method which prints out all the strings which are of length 5 or greater only. <br />
  Create a new Tree of Integers. Provide three methods that are able to perform the following operations: print out an even number, calculate the SUM of the node values, calculate the PRODUCT of the Node values. You should start by extending BinarySearchTree: public class IntegerBST extends BinarySearchTree Integer <br />
  Create a new Tree that compares People Nodes by their age. Demonstrate this functionality by adding in a number of people into your tree.<br />
  Create a new class called IntegerBST.java that extends your BinarySearchTree
      This class should have the following methods:<br />

  A sum  this method should add the value of all the elements in the tree <br />
B product this method should calculate the product of all the elements in the tree<br />
C even  this method should identify and print out all the even numbers that are found within
the tree <br />
You should create an implementation of a BinarySearchTree and add a few numbers into the tree.
Invoke calls to your methods to demonstrate that they are functioning properly. <br />
  </p>

 

   <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamalms/BinaryTree-Project")}>https://github.com/jamalms/BinaryTree-Project</a>
   
   </>
  )
   PopupboxManager.open({content})
 }
 
 const popupboxConfigBinaryTree = {
   titleBar: {
     enable: true,
     text: "Binary Tree Application Data Structure JAVA"
   },
   fadeIn: true,
   fadeInSpeed: 500
 }



   //Algorithems Project
const openPopupboxAlgorithems = () => { //  taskManager
  const content = (
   <>
   <img className="portfolio-image-popupbox" src={algorithems} alt="Algorithems Project..."/>

  <p>
  -	Use iterative and recursive techniques to design and implement sorting and searching algorithms.<br />
-	Conduct in depth algorithm analysis in terms of time complexity and present the results of analysis.<br />
-	Evaluate algorithms, identify an algorithm from a range of possible options, and implement the algorithm to solve computational problems in particular contexts.<br />
-	Identify and apply best practices including exception handling and design patterns in the implementation of software solutions to solve real-world problems.<br />

  </p>

 

   <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamalms/Algorithms-Project-")}>https://github.com/jamalms/Algorithms-Project-</a>
   
   </>
  )
   PopupboxManager.open({content})
 }
 
 const popupboxConfigAlgorithems = {
   titleBar: {
     enable: true,
     text: "Algorithems Project JAVA"
   },
   fadeIn: true,
   fadeInSpeed: 500
 }

  return (
    <div className="portfolio-wrapper">
    <div className="container">
      <h1 className="text-uppercase text-center py-5">portfolio</h1>
      <div className="image-box-wrapper row justify-content-center">
        <div className="portfolio-image-box" onClick={openPopupboxSmartSurveillance}>
        <img className="portfolio-image" src={surveillance} alt="Smart Surveillance/Security System Project" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
           
            {/* - */}

           
           
              <div className="portfolio-image-box" onClick={openPopupboxCinema}> 
                <img className="portfolio-image" src={cinema} alt="Cinema Guide Project" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            
            {/* - */}
            
            <div className="portfolio-image-box" onClick={openPopupboxMovie}> 
                <img className="portfolio-image" src={netflix} alt="Movie Project" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            
            {/* - */}
            
            <div className="portfolio-image-box" onClick={openPopupboxiCARE}> 
                <img className="portfolio-image" src={iCARE} alt="iCARE Project" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                
            </div>


             {/* - */}
            
             <div className="portfolio-image-box" onClick={openPopupboxBinaryTree}> 
                <img className="portfolio-image" src={BinaryTree} alt="BinaryTree Project" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                
            </div>
             {/* - */}
            
             <div className="portfolio-image-box" onClick={openPopupboxAlgorithems}> 
                <img className="portfolio-image" src={algorithems} alt="algorithems Project" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                
            </div>

        </div>
    </div>
    <PopupboxContainer {...popupboxConfigSmartSurveillance} />
    <PopupboxContainer {...popupboxConfigCinema} />
    <PopupboxContainer {...popupboxConfigMovie} />  
    <PopupboxContainer {...popupboxConfigiCARE} /> 
    <PopupboxContainer {...popupboxConfigBinaryTree} /> 
    <PopupboxContainer {...popupboxConfigAlgorithems} />   
</div>
  )
}

export default Portfolio;