import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import keyFeatures from "../../assets/img/Solutions/keyFeature.png";

const KeyFeatures = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Box
          className="scroll-down-icon"
          sx={{
            textAlign: "center",
            width: "fit-content",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          ⏷
        </Box>
        <Container>
          <Box className="headingBoxWidth">
            <Typography
              sx={{
                fontSize: { xs: 26, sm: 32, md: 39 },
                fontWeight: 700,
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              {data.mainHeading}
            </Typography>
            <Typography
              sx={[
                {
                  fontSize: { xs: 26, sm: 32, md: 39 },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  textAlign: "center",
                },
                { color: "#c75425" },
              ]}
            >
              {data.secondHeading}
            </Typography>
            {data.description && (
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: "center",
                  color: "#666666",
                  marginTop: "10px",
                }}
              >
                {data.description}
              </Typography>
            )}
          </Box>
          <Grid
            container
            sx={{ margin: "50px 0px" }}
            rowGap={{ xs: 4, md: 0 }}
            columnSpacing={{ xs: 0, md: 2 }}
          >
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
              <Grid container rowGap={{ xs: 4, md: 2 }}>
                {data.leftSideData?.map((item, index) => (
                  <Grid size={{ xs: 12 }} key={index}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "start", lg: "end" },
                        alignContent: "center",
                        color: "#c75425",
                        fontSize: "20px",
                        fontWeight: 600,
                        paddingBottom: "12px",
                        textAlign: "end",
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "start", lg: "end" },
                        alignContent: "center",
                        textAlign: { xs: "start", lg: "end" },
                        color: "#666666",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              size={{ xs: 0, sm: 0, md: 0, lg: 4 }}
              sx={{
                display: { xs: "none", lg: "block" },
              }}
            >
              <Box
                sx={{
                  display: "felx",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={data.image}
                  alt="image"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
              <Grid container rowGap={{ xs: 4, md: 2 }}>
                {data.rightSideData?.map((item, index) => (
                  <Grid size={{ xs: 12 }} key={index}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignContent: "center",
                        color: "#c75425",
                        fontSize: "20px",
                        fontWeight: 600,
                        paddingBottom: "12px",
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignContent: "center",
                        color: "#666666",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default KeyFeatures;
// const data = {
//   mainHeading: "KEY FEATURES OF",
//   secondHeading: "our HRMS Solution",
//   image: keyFeatures,
//   description:
//     "Our HRMS solution services include a number of features, some of which are listed below.",
//   leftSideData: [
//     {
//       heading: "Staff Management",
//       description:
//         "Employ Hiring with their roles and permissions and their enrollment",
//     },
//     {
//       heading: "Payroll",
//       description:
//         "The automated payroll system of HRM Software which automatically gathers all the information like time and attendance of all the employees, make calculations, apply deductions and taxes if any, and generate salary of the employees and system manages hourly wages",
//     },
//     {
//       heading: "Project Manager",
//       description:
//         "Assign projects and tasks to employees and track the progress report of the project on a day to day basis. Customers login ID can be created for customers to login and check there project report and progress",
//     },
//   ],
//   rightSideData: [
//     {
//       heading: "Timesheet",
//       description:
//         "With HRM you can manage your attendance, holidays, half-days, leaves on a single click",
//     },
//     {
//       heading: "HR calendar",
//       description:
//         "To keep a track of upcoming events and appraisals of an individual. It can be also used for day to day up-gradation within the organization",
//     },
//     {
//       heading: "Recruitment",
//       description:
//         "Post a job profile on the company website and get the application imported within the software. By using the HRM Software the recruitment Process for candidates",
//     },
//   ],
// };
