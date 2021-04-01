import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="property picture"
          height="140"
          image={props.image_645_430_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.displayable_address}
          </Typography>
          <Typography variant="body2" noWrap color="textSecondary" component="p">
            {props.short_description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>        
        <Button size="small" color="primary" href={props.details_url}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}