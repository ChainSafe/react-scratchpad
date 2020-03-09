import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uiConstants, appColors } from 'theme';
import LoadingComponent from 'components/LoadingComponent';


const styles = theme => createStyles({
  root: {
    display: 'flex',
    flexDirection: "column",
    minHeight: `calc(100vh - ${uiConstants.pageMargin}px)`,
    justifyContent: "space-between"
  },
  header:{
    height: uiConstants.headerHeight,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: appColors.black,
    position: "relative",
    width: "100%",
    // Pseudo element used to change opacity independant of header content
  },
  content: {
    padding: uiConstants.pageMargin / 1.5,
    flexGrow: 1,
    border: `${uiConstants.modal.borderThickness}px solid ${uiConstants.modal.borderColor}`,
    borderTop: "none",
    borderBottom: "none",
  },
});

interface Props extends WithStyles<typeof styles> {
  currentlySending: boolean;
  isConnected: boolean;
  children: ReactNode,
  active: boolean,
  deactivate(): void,
  account: string | null | undefined
}


const AppWrapper: React.SFC<Props> = (props: Props) => {
  const {
    classes,
    children,
    currentlySending
  } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        {children}
      </main>
      <ToastContainer autoClose={5000} />
      <LoadingComponent loading={currentlySending} />
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(AppWrapper);
