import React, { useRef, useState } from 'react';
// import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { Portal } from '@mui/material/';

const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

BackdropUnstyled.displayName = 'BackdropUnstyled';

BackdropUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const SideMenu = ({ drawerStatus, openDrawer, closeDrawer }) => {
  const container = useRef(null);

  return (
    <div>
      <button type='button' onClick={openDrawer}>
        Open modal
      </button>
      <Modal
        aria-labelledby='unstyled-modal-title'
        aria-describedby='unstyled-modal-description'
        open={drawerStatus}
        onClose={closeDrawer}
        BackdropComponent={Backdrop}
      >
        {drawerStatus ? (
          <Portal container={container.current}>
            <Box>
              {/* <h2 id='unstyled-modal-title'>Text in a modal</h2>
              <p id='unstyled-modal-description'>
                Aliquid amet deserunt earum!
              </p> */}
            </Box>
          </Portal>
        ) : null}
      </Modal>

      {drawerStatus ? (
        <Box sx={style} ref={container}>
          <h2 id='unstyled-modal-title'>Text in a modal</h2>
          <p id='unstyled-modal-description'>Aliquid amet deserunt earum!</p>
        </Box>
      ) : null}
    </div>
  );
};

export default SideMenu;

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  /* filter: blur(30px); */
  background: 'red';
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 'clamp(10rem, 65vw + 1rem, 30rem)',
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,

    bgcolor: 'transparent',
//   bgcolor: 'red',
  p: 2,
  height: '200px',
  zIndex: 1500,
};
