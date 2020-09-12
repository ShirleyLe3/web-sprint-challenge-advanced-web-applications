import React, { useState } from "react";
import axios from "axios";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
  };

  const deleteColor = color => {
    // make a delete request to delete this color
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

// import React, { useState } from "react";
// import { axiosWithAuth } from "../utils/Auth";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import styled from "styled-components";

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });
// const Div = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 20%;
//   justify-content: center;
//   flex-wrap: wrap;
//   margin: 1%;
//   min-width: 200px;
// `;
// const FriendsList = (props) => {
//   const classes = useStyles();
//   console.log(props.friend);

//   // const Edit = (id) {
//   //     axiosWithAuth().put(`/api/friends/${id}`)
//   // }
//   return (
//     <Div>
//       <Card className={classes.card}>
//         <CardActionArea>
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               <p>{props.friend.name}</p>
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               <p>Age: {props.friend.age}</p>
//               <p>Email: {props.friend.email}</p>
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button
//             size="small"
//             color="primary"
//             onClick={() => {
//               props.Delete(props.friend.id);
//             }}
//           >
//             Delete
//           </Button>
//           {/* <Button size="small" color="primary">
//           Edit
//         </Button> */}
//         </CardActions>
//       </Card>
//     </Div>
//   );
// };



export default ColorList;
