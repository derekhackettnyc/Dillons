// import React from 'react'

// class AnimateHeader extends React.Component {

//     constructor(props) {
//         super(props);

//         this.ticking = false;
//         this.lastScrollTop = 0;

//         this.state = {
//             topValue: '0px'
//         }
//     }

//     componentDidMount() {
//         window.addEventListener('scroll', this.animateHeader);
//         console.log("scroll has mounted")
//     }

//     componentWillUnmount() {
//         window.removeEventListener('scroll', this.animateHeader)
//         console.log("scroll has UNmounted")
//     }

//     animateHeader = () => {
//         console.log("scrolling")
//         if (!this.ticking) 
//             if(this.props.menuDrawOpened) {
//                 console.log("BLAHHHHHHHH")
//             }
//             else {
//                 window.requestAnimationFrame(() => {

//                     const st = window.pageYOffset || document.documentElement.scrollTop
//                     st > this.lastScrollTop && st > 10 ? this.setState({ topValue: '-150px' }) : this.setState({ topValue: '0px' })
//                     this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//                     this.ticking = true;
    
//                 });                
//             }
        
//         this.props.openedDropDown && this.props.openDropDown("")    

//         this.ticking = false;
//     }

//     render() {
//         return (
//             <div className="header" style={{ top: this.state.topValue }}>
//                 {this.props.children}
//             </div>
//         )
//     }
// }


// export default AnimateHeader