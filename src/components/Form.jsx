import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import useNews from "../hooks/useNews";
import { CATEGORIES } from "../data";

const Form = () => {
  const { category, handleChangeCategory } = useNews();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Topic</InputLabel>
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
      </FormControl>
    </form>
  );
};

export default Form;
