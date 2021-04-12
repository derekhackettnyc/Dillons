// import React from 'react';
// // import './elements.scss'

// class ScrollToTop extends React.Component {

//     state = {
//         isVisable: false
//     }

//     componentDidMount() {
//         window.addEventListener('scroll', this.handleScrollY)
//     }

//     componentWillUnmount() {
//         window.removeEventListener('scroll', this.handleScrollY)
//     }

//     handleScrollY = () => {
//         window.scrollY > 500 ? this.setState({ isVisable: true }) : this.setState({ isVisable: false })
//     }

//     onButtonClick() {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//         console.log(this.state.isVisable)
//     }

//     render() {

//         return (
//             <div className="scroll-to-top">
//                 <button
//                     className="scroll-to-top__button"
//                     style={{ right: this.state.isVisable ? '2rem' : '-6rem' }}
//                     onClick={() => this.onButtonClick()}
//                 >
//                     <i className="fas fa-arrow-up"></i>
//                 </button>
//             </div>
//         )
//     }

// }

// export default ScrollToTop;
