import app from './routes';

const PORT = process.env.PORT || 11000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});