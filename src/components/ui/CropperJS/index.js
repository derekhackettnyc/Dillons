import React, { Fragment, useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const CropperStage = ({ cropperCanvas, imagePreview, destroy }) => {

  const cropper = useRef();
  const [locked, setLocked] = useState('')

  const toggleLockIcon = () => {

    const enable = () => {
      setLocked('')
      cropper.current.enable()
    }

    const disable = () => {
      setLocked('locked')
      cropper.current.disable()
    }

    locked === '' ? disable() : enable() 

  }

    console.log("CROPPER JS")

    return (
      <div>
        <Cropper
          // cardID={props.cardID}
          // name={props.name}
          ref={cropper}
          src={imagePreview}
          style={{ width: '100%' }}
          aspectRatio={1}
          autoCropArea={.9}
          // viewMode={1}
          restore={false}
          center={false}
          highlight={false}
          dragMode={'move'}
          scalable={true}
          guides={false}
          cropBoxMovable={false}
          cropBoxResizable={false}
          toggleDragModeOnDblclick={false}
          minContainerHeight={500}
          minCropBoxWidth={320}
          minCropBoxHeight={320}

          ready={() => {
            console.log("Cropper >> Ready", cropper)
            cropperCanvas(cropper.current)
          }}

        />

        <div className="editCard__actions editCard__actions--right">
          {true &&
            <Fragment>
              <i className="fas fa-power-off tooltip" onClick={destroy}><span className="tooltiptext">REVERT</span></i>
              <i onClick={toggleLockIcon} className={ locked === '' ?  "fas fa-unlock tooltip" : "fas fa-lock tooltip locked" }><span className="tooltiptext">LOCK IMAGE</span></i>

            </Fragment>
          }
        </div>
        <div className="editCard__actions editCard__actions--bottom">
          {true &&
            <Fragment>
              <i className={`fas fa-undo-alt tooltip ${locked}`} onClick={() => cropper.current.rotate(-45)}><span className="tooltiptext">Rotate -45°</span></i>
              <i className={`fas fa-redo-alt tooltip ${locked}`} onClick={() => cropper.current.rotate(45)}><span className="tooltiptext">Rotate 45°</span></i>
              <i className={`fas fa-search-plus tooltip ${locked}`} onClick={() => cropper.current.zoom(0.1)}><span className="tooltiptext">ZoomIN</span></i>
              <i className={`fas fa-search-minus tooltip ${locked}`} onClick={() => cropper.current.zoom(-0.1)}><span className="tooltiptext">ZoomOUT</span></i>
              <i className={`fas fa-sync-alt tooltip ${locked}`} onClick={() => cropper.current.reset()}><span className="tooltiptext">RESET</span></i>
            </Fragment>
          }
        </div>
      </div>
    )
}

export default CropperStage