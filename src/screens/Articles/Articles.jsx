import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArticles,
  selectArticlesError,
  selectArticlesStatus,
} from "../../store/articles/selectors";
import { getArticles } from "../../store/articles/actions";
import { FETCH_STATUSES } from "../../utils/constants";

export const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const error = useSelector(selectArticlesError);
  const status = useSelector(selectArticlesStatus);

  const sendRequest = () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <button onClick={sendRequest}>GET</button>
      {status === FETCH_STATUSES.REQUEST && <CircularProgress />}
      {error && <h4>{error}</h4>}
      {articles && (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
