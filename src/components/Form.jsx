import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import useNews from "../hooks/useNews";
import { CATEGORIES } from "../data";

const Form = () => {
  const { category, handleChangeCategory } = useNews();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          onChange={handleChangeCategory}
          value={category}
        >
          {CATEGORIES.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
        <Box sx={{ marginTop: 2 }}>
          <Button fullWidth variant="contained" color="primary">
            {" "}
            News Search
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default Form;
