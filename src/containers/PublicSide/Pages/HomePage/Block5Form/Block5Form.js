import React, { Component, Fragment, useEffect, useState } from "react";
import styles from "./Block5Form.module.css";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";

import { postCallback } from "../../../../../actions/userActions";
import { notification, Button } from "antd";

const Block5Form = (props) => {
  // const [data, setData] = useState('');

  const onSubmit = (values, ...props) => {
    console.log('props', props)
    postCallback(values).then((el) => {
      notification.success({ message: el.msg });
      console.log('props1', props)

      props[0].resetForm();
    });
    
  };
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
      }}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formWrapper}>
            <h2 className={styles.title}>Оставить заявку</h2>

            <div className={styles.inputs}>
              <TextField
                label="Имя"
                name="name"
                fullWidth
                value={values.name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className={styles.inputs}>
              <TextField
                label="Телефон"
                name="phone"
                fullWidth
                value={values.phone}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
            </div>
          </div>
          <div className={styles.inputs}>
            <button className={styles.button} type="submit">
              <p>Отправить</p>
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Block5Form;

// class Block5Form extends Component {
//   state = {
//     name: "",
//     tel: "",
//   };
//   handleSend = (e) => {
//     console.log("111");
//     // e.preventDefault();
//     const { name, tel } = this.state;

//     postCallback({
//       name: name ? name : "",
//       tel: tel ? tel : "",
//     });

//     notification.success({
//       message: "Отправлено",
//     });

//     this.setState({
//       name: "",
//       email: "",
//     });
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({
//       [name]: value,
//     });
//   };

//   renderForm = () => {
//     const token = localStorage.getItem("token"),
//       { name, tel } = this.state;

//     return (
//       <Fragment>
//         <div>
//           <label>Имя</label>
//           <input
//             type="text"
//             value={name}
//             name="name"
//             onChange={this.handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Телефон</label>
//           <input
//             type="text"
//             value={tel}
//             name="tel"
//             onChange={this.handleChange}
//             required
//           />
//         </div>
//       </Fragment>
//     );
//   };

//   render() {
//     return (
//       <div>
//         <form className={styles.contactForm} onSubmit={this.handleSend}>
//           <h5 className={styles.title}>Контактная форма</h5>
//           {this.renderForm()}
//           <div style={{ textAlign: "center" }}>
//             <Button
//               style={{ width: 350, color: "#fff", height: 50 }}
//               typehtmlType="submit"
//             >
//               Отправить
//             </Button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default Block5Form;
