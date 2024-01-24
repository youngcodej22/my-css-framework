import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "../ProTip";
import Button from "@mui/material/Button";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const MaterialTutorial = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI Vite.js example in TypeScript
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
        <br />
        <Button variant="outlined" color="secondary">
          Hello world
        </Button>
        <hr />
        {/* <MyComponent /> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel, corrupti, exercitationem sint quod harum eaque tempora cum
          debitis magni atque! Officia animi modi harum natus sit illo iusto
          sunt.loerem
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel, corrupti, exercitationem sint quod harum eaque tempora cum
          debitis magni atque! Officia animi modi harum natus sit illo iusto
          sunt.loerem
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel, corrupti, exercitationem sint quod harum eaque tempora cum
          debitis magni atque! Officia animi modi harum natus sit illo iusto
          sunt.loerem
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel, corrupti, exercitationem sint quod harum eaque tempora cum
          debitis magni atque! Officia animi modi harum natus sit illo iusto
          sunt.loerem
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel, corrupti, exercitationem sint quod harum eaque tempora cum
          debitis magni atque! Officia animi modi harum natus sit illo iusto
          sunt.loerem
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel, corrupti, exercitationem sint quod harum eaque tempora cum
          debitis magni atque! Officia animi modi harum natus sit illo iusto
          sunt.loerem
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel, corrupti, exercitationem sint quod harum eaque tempora cum
          debitis magni atque! Officia animi modi harum natus sit illo iusto
          sunt.loerem
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel, corrupti, exercitationem sint quod harum eaque tempora cum
          debitis magni atque! Officia animi modi harum natus sit illo iusto
          sunt.loerem
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel, corrupti, exercitationem sint quod harum eaque tempora cum
          debitis magni atque! Officia animi modi harum natus sit illo iusto
          sunt.loerem
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel, corrupti, exercitationem sint quod harum eaque tempora cum
          debitis magni atque! Officia animi modi harum natus sit illo iusto
          sunt.loerem
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel, corrupti, exercitationem sint quod harum eaque tempora cum
          debitis magni atque! Officia animi modi harum natus sit illo iusto
          sunt.loerem
        </p>
      </Container>
    </>
  );
};

export default MaterialTutorial;
