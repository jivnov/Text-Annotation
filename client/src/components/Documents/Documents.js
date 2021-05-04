import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Document from './Document/Document';
import useStyles from './styles';

const Documents = ({ setCurrentId }) => {
  const documents = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !documents.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {documents.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Document document={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Documents;
