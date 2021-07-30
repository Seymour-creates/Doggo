import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdClose }from 'react-icons/md'

// const Background = styled.div`
//     width: 100;
//     height: 100;
//     background: rgba(0,0,0,0.8);
//     position: fixed;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

const ModalWrapper = styled.div`
    width: 400px;
    height: 250px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`;

const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;



export default function Modal({ showModal, dogPics })  {
    const [useLess, setUseless] = useState('')
    //const randomImg = `https://dog.ceo/api/breed/${}/images/random`
    console.log('spec',dogPics);
    useEffect( () => {
        const randomImg = () => {
            let randomDogAPI
            if (dogPics.length > 0) {
                if (dogPics.split(' ').length > 1){ 
                    const sepWords = dogPics.split(' ');
                    randomDogAPI = `https://dog.ceo/api/breed/${sepWords[1]}/${sepWords[0]}/images/random`;
                }
                else randomDogAPI = `https://dog.ceo/api/breed/${dogPics}/images/random`;
            }
            else {
                console.log('returning out of func: ',dogPics)
                return
            };

            try{
                fetch(randomDogAPI)
                .then(resp => resp.json())
                .then(res => {
                    console.log(res);
                    setUseless(res.message);
                })
            } catch (err) {
                console.log(err.message);
            }
        }

        randomImg();
    },[dogPics])

    
    return (
        <>
        {showModal ? (
            
                <ModalWrapper showModal={showModal}>
                    <ModalImg src={useLess}/>
                </ModalWrapper>
            ):
            null
            }
        
        </>
    )
}