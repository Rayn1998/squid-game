import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { addSerieAction, removeSerieAction } from "../../store/seriesReducer";

const Admin = () => {
  const series = useSelector((state) => state.series.series);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addSerieAction(data.link));
    reset();
  };

  const handleDelete = (data) => {
    dispatch(removeSerieAction(data));
  };

  return (
    <div className="admin">
      <ul className="series-list">
        {series.map((serie, i) => {
          return (
            <li className="list-item" key={i}>
              <img className="list-item__img" src={serie} alt={serie} />
              <p className="list-item__text">Serie №{i + 1}</p>
              <button
                className="list-item__btn"
                onClick={() => handleDelete(serie)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <div className="admin__form-wrapper">
        <h2>Add new serie</h2>
        <form className="admin__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="admin__form-input"
            placeholder="Enter thumbnail link"
            {...register("link", { required: true })}
          />
          <span style={{ 
            color: "red",
            visibility: errors.link ? "visible" : "hidden" 
          }}>Fill thumbnail field please</span>
          <input className="admin__form-btn" type="submit" value="add" />
        </form>
      </div>
    </div>
  );
};

export default Admin;
