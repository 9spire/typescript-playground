import * as React from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
} from "@mui/material";

interface Artist {
  nameFirst: string;
  nameLast?: string;
  location?: string;
}

interface Song {
  length: number;
  title: string;
  description?: string;
  genre: string[];
  year: number;
  artist: string;
  cover?: string;
}

interface Writing {
  length: number;
  title: string;
  description?: string;
  genre: string[];
  year: number;
  writer: string;
  cover?: string;
}

const ArtistSelect = () => {
  const [value, setValue] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Please Choose");
  const [artForm, setArtForm] = React.useState("");
  const [preview, setPreview] = React.useState("Default State");

  let url: string;
  React.useEffect(() => {
    const getAJoke = async () => {
      if (artForm === "music") {
        url =
          "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
      }
      if (artForm === "writing") {
        url = url =
          "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
      }
      const response = await fetch(url);
      const toJson = await response.json();
      setPreview(toJson.joke);
    };
    getAJoke();
  }, [artForm]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value === "DJ") {
      setHelperText("Time to Listen");
      setError(false);
      setDisabled(true);
      setArtForm("music");
    } else if (value === "Writer") {
      setHelperText("Time to Read");
      setError(false);
      setDisabled(true);
      setArtForm("writing");
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <>
      <Box component="div" sx={{ pt: 0 }}>
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{ m: 3 }}
            component="fieldset"
            error={error}
            variant="standard"
            disabled={disabled}
          >
            <FormLabel component="legend">Choose An Artist</FormLabel>
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="DJ" control={<Radio />} label="Music" />
              <FormControlLabel
                value="Writer"
                control={<Radio />}
                label="Written"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button
              sx={{ mt: 1, mr: 1 }}
              type="submit"
              variant="outlined"
              disabled={disabled}
            >
              Load Creative Work
            </Button>
          </FormControl>
        </form>
      </Box>
      <p>{preview}</p>
    </>
  );
};

export default ArtistSelect;
