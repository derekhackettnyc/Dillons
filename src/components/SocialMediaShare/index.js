import React from 'react'

export const ShareOnFaceBook = ({ url, ...props }) => {

    return (
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" >{props.children}</a>
    );


}

export const Mailto = ({ email, subject, body, ...props }) => {
    return (
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{props.children}</a>
    );
}


export const FaceBookMessenger = ({ uri,body, ...props }) => {

    return(
        <a href={`fb-messenger://share?link=${encodeURIComponent(uri)}`} target="_blank" rel="noopener noreferrer" data-tealium="share3">{props.children}</a>
    )
}


export const Sms = ({ uri,body, ...props }) => {
    return (
    <a href={`sms:?&body=${encodeURIComponent(uri)}%0A%0ADillons%20Jewellery%20%C2%AE%20%7C%20Official%20Website%20%7C%20Irish%20Store%0A%0A${body}`} target="_blank"  rel="noopener noreferrer"  data-tealium="share4">{props.children}</a>
    );
}


export const WhatsApp = ({ text, ...props }) => {
    return (
        <a href={`whatsapp://send?text=${encodeURIComponent(text) || ''}`}>{props.children}</a>
    );
}