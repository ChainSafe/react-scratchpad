import { Theme, Typography, WithStyles, Button, Input } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { appColors } from 'theme';
import apiRequest from 'api/apiRequest';

const styles = ({ spacing, breakpoints }: Theme) => createStyles({
  root:{
    margin: "10px auto",
  },
  heading:{
    color: appColors.black,
    marginBottom: 15
  },
  inputs:{
    margin: "20px 0",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  info:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 400,
    "& > *":{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: `1px solid black`,
      "& > *":{
        width: "50%",
        padding: "10px",
      }
    }
  }
});

interface OwnProps extends WithStyles<typeof styles> {
}

const ScratchPad: React.SFC<OwnProps> = (props: OwnProps) => {
  const {
    classes,
  } = props;

  // BEGIN SCRATCH PAD

  // Reference hooks
  // State
  const [count, setCount] = useState(0);

  const [obj, setObj] = useState({
    title: "Hectic",
    url: "localhost:8545"
  })

  // Effect on load
  useEffect(() => {
    console.log("Component Did Mount basically")
    console.log("Load packages here")
  }, [count])

  // Effect on update
  useEffect(() => {
    console.log('count', count)
  }, [count])

  // Async fetch
  // https://www.robinwieruch.de/react-hooks-fetch-data

  useEffect(() => {
    const fetchData = async () => {
      const body = JSON.stringify({
        var1: "var1",
        var2: "var2",
      });
      const result = await apiRequest('POST', 'https://hn.algolia.com/api/v1/search?query=redux', body, 'application/json');

      console.log("Fetched: ", result)
    };
    fetchData();
  }, []);

  return <article className={classes.root}>
    <Typography className={classes.heading} variant="h1" component="h1">
      Behold the scratch pad
    </Typography>
    <section>
      <Typography className={classes.heading} variant="h2" component="h2">
        Controls
      </Typography>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Click to increment count
      </Button>
    </section>

    <section className={classes.inputs}>
      <Typography className={classes.heading} variant="h2" component="h2">
        Data inputs
      </Typography>
      <Input type="title" placeholder={obj.title} onChange={(event) => setObj({
        ...obj,
        title: event.target.value
      })}/>

      <Input type="url" placeholder={obj.url} onChange={(event) => setObj({
        ...obj,
        url: event.target.value
      })}/>
    </section>

    <Typography className={classes.heading} variant="h2" component="h2">
      Metrics
    </Typography>
    <section className={classes.info}>
      {Object.keys(obj).map(objectKey => {
          return (
            <div key={objectKey}>
              <div>
                {objectKey}
              </div>
              <div>
                {obj[objectKey]}
              </div>
            </div>
          );
        })}
    </section>

  </article>
}

export default withStyles(styles, { withTheme: true })(ScratchPad);
