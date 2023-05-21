import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material";

const NewsItem = ({ news }) => {
  const { urlToImage, url, title, source } = news;

  return (
    <>
      {urlToImage !== null && (
        <Grid item md={4} lg={3} xs={12}>
          <Card>
            <CardMedia
              component="img"
              alt={`Imagen de la noticia ${title}`}
              image={urlToImage}
              height={"180px"}
            />

            <CardContent sx={{ height: "6rem" }}>
              <Typography
                variant="body1"
                color="error"
                sx={{ fontWeight: "bold", fontSize: "1 rem" }}
              >
                {source.name}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                {title}
              </Typography>
            </CardContent>

            <CardActions>
              <Link
                href={url}
                target="_blank"
                variant="button"
                width={"100%"}
                textAlign={"center"}
                sx={{
                  textDecoration: "none",
                }}
              >
                Read News
              </Link>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default NewsItem;
