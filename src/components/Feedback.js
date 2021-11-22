import React from "react";
import Details from '@theme/Details';

const formName = 'feedback v1'

function radioBlock(message, name, labelLeft, labelRight) {
    return (<div>
            <label style={{display: 'block', textAlign: 'center', marginBottom: '0.5em'}} htmlFor={name}>
                <strong>{message}<sup>*</sup></strong>
            </label>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '100%',
                    margin: 'auto',
                    marginBottom: '1em',
                }}>
                <label style={{width: '20%', textAlign: 'right'}} htmlFor={`${name}1`}>{labelLeft}</label>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignSelf: 'center',
                    width: '60%'
                }}>
                    <input type="radio" id={`${name}1`} name={name} value={1} required/>
                    <input type="radio" id={`${name}2`} name={name} value={2} required/>
                    <input type="radio" id={`${name}3`} name={name} value={3} required/>
                    <input type="radio" id={`${name}4`} name={name} value={4} required/>
                    <input type="radio" id={`${name}5`} name={name} value={5} required/>
                </div>
                <label style={{width: '20%'}} htmlFor={`${name}5`}>{labelRight}</label>
            </div>
        </div>
    )
}

function textAnswer(message, name) {
    return (<div>
            <label style={{display: 'block', marginBottom: '0.5em'}} htmlFor={name}>
                <strong>{message}</strong>
            </label>
            <textarea
                style={{
                    width: '100%',
                    resize: 'vertical',
                    minHeight: '3em',
                    fontFamily: 'system-ui',
                    fontSize: '16px',
                }}
                id={name}
                name={name}
            ></textarea>
        </div>
    )
}

export const Feedback = (props) => {
    return (
        <Details style={{backgroundColor: 'var(--block-background)', border: 'none'}}
            summary={<summary><strong>Let us know what you think!</strong></summary>}>
            <form
                name={formName}
                method='post'
                data-netlify='true'
                onSubmit='submit'
                data-netlify-honeypot={'bot-field'}
            >
                <div hidden>
                   <input name='bot-field'/>
                </div>
                <input type={'hidden'} name={'form-name'} value={formName}/>
                <input type={'hidden'} name={'chapter'} value={props.page}/>
                <div style={{display: 'block', marginBottom: '0.5em'}}>
                    {radioBlock(
                        'How useful did you find this chapter?',
                        'useful',
                        'Not Useful',
                        'Very Useful',
                    )}
                    {radioBlock(
                        'What did you think about the difficulty of this chapter?',
                        'difficulty',
                        'Too Simple',
                        'Too Complex',
                    )}
                    {textAnswer(
                        'Do you have any specific recommendations for improving this chapter?',
                        'suggestions',
                    )}
                </div>
                <button
                    style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: '0',
                        backgroundColor: 'var(--block-item)',
                        border: 'none',
                        padding: '7px 20px 7px 20px',
                        fontSize: '16px',
                        borderRadius: '0.4em',
                        fontWeight: 'bold'
                    }} type={'submit'}>
                    Submit
                </button>
            </form>
        </Details>
    )
}
