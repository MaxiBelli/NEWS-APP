import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNews from "../hooks/useNews";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const { news } = useNews();

  return (
    <>
      <Grid container spacing={3}>
        {news.map((item) => (
          <NewsItem key={item.url} news={item} />
        ))}
      </Grid>
    </>
  );
};

export default NewsList;
