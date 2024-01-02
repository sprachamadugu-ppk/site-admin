import React, { useEffect, useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getDashboard } from "../api/api-calls";
import { authToken } from "../context/TokenContext";
import { dashboard } from "../types";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Dashboard: React.FC = () => {
  const { token } = useContext(authToken);
  const [dashboardData, setDashboardData] = useState<dashboard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboard(token);
        setDashboardData(data as unknown as dashboard[]);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <Layout>
      <Typography variant="h4" gutterBottom >
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {dashboardData.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Link
              to="/404"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div" className="capitalize" >
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    {item.count}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Dashboard;
