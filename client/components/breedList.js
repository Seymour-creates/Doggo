import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../globalStyles";
import Modal from "./modal";

const Container = styled.div`
    ${'' /* display: flex; */}
    justify-content: center;
    align-items: center;
    ${'' /* height: 50vh;
    width: 50vw; */}
   
`



export default function BreedList() {
    const [breeds,setBreeds] = useState([]);
    const [specDog, setSpecDog] = useState('');
    const [showModal,setShowModal] = useState(false);

    const openModal = (e) => {
        setShowModal(showModal => !showModal);
        setSpecDog(e.target.id);
        
    };
    console.log(specDog);
    useEffect( () => {
        const fetchDoggos = async () => {
            const dogAPI = 'https://dog.ceo/api/breeds/list/all';

            try{
                const getDogs = await fetch(dogAPI);
                const dogList = await getDogs.json();
                
                const doggoList = []
                const combineNames = (name1, name2) => {
                    return `${name1} ${name2}`
                }
                for (const breed in dogList.message) {
                    dogList.message[breed].length > 0 ?
                     doggoList.push(combineNames(...dogList.message[breed],breed)) : doggoList.push(breed);  
                }

                setBreeds([...breeds, ...doggoList]);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchDoggos();
    },[]);

    const dogLinks = breeds.map((dog,idx)=> <button> <a href="#modal" id={dog} key={dog + idx} onClick={e => openModal(e)} >{dog}</a> <br/></button> )

    return (
        <>
        <Container>
        {dogLinks}
        <Modal id="modal"  showModal={showModal} setShowModal={setShowModal} dogPics={specDog}/>
        <GlobalStyle/>
        </Container>
       
        </>
    )

}