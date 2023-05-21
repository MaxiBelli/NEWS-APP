import { Container, Grid, Typography, Stack, Pagination } from "@mui/material";
import Form from "./Form";
import NewsList from "./NewsList";
import useNews from "../hooks/useNews";

function AppNews() {
  const { totalNews, handleChangePage, page } = useNews();

  const totalPages = Math.ceil(totalNews / 20);
  return (
    <Container>
      <header>
        <Stack
          alignItems="center"
          justifyContent="space-evenly"
          direction={{ xxs: "column", md: "row" }}
          marginY={"2rem"}
        >
          <Typography
            align="center"
            marginY={5}
            component="h1"
            variant="h2"
            sx={{ fontWeight: "bold" }}
          >
            News
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Typography
              align="center"
              marginY={4}
              marginX={2}
              component="h2"
              variant="h6"
              sx={{ fontWeight: "bold", color: "#747171" }}
            >
              Select the News Topic you Want to Search
            </Typography>
            <Grid item xs={10} md={6} lg={4}>
              <Form />
            </Grid>
          </Grid>
        </Stack>
      </header>
      <main>
        <Grid container px="1rem" py="1rem" sx={{ background: "#f4f0f0" }}>
          <NewsList />
        </Grid>
      </main>
      <Stack
        sx={{
          marginY: 5,
        }}
        spacing={2}
        direction={"row"}
        justifyContent="center"
        alignItems="center"
      >
        <Pagination
          count={totalPages}
          color="primary"
          onChange={handleChangePage}
          page={page}
        />
      </Stack>
    </Container>
  );
}

export default AppNews;
