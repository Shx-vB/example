import { Card, CardContent, Typography } from "@mui/material";

export function DetailsPage() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Details
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A second route. Add more by adding an object to src/routes/index.js.
        </Typography>
      </CardContent>
    </Card>
  );
}
