import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "./styles.scss";

export default function SelectMUI() {
  const [lang, setLang] = React.useState("Uz");

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <Select value={lang} onChange={handleChange} displayEmpty>
          <MenuItem selected value={"Uz"}>
            UZ
          </MenuItem>
          <MenuItem value={"Turk"}>TURK</MenuItem>
          <MenuItem value={"En"}>EN</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
