import { Link as RouterLink } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

export function OverviewPage() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Replace this page with your module's first screen. It inherits the shell's theme automatically.
        </Typography>
        {/* Relative link: resolves under the module root in the shell and standalone alike. */}
        <Button component={RouterLink} to="details" variant="contained">
          Go to details
        </Button>
      </CardContent>
    </Card>
  );
}
