import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

import { CATEGORIES } from "../data";

const Form = () => {
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select label="Category">
          {CATEGORIES.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
        <Box sx={{marginTop: 2}}>
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
