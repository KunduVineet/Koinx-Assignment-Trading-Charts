# Trading View Widget Application

This application integrates TradingView's advanced chart widget with various navigation items, including sections for fundamentals, team information, sentiments, and more. It leverages React for the UI and React Router for seamless navigation between different views.

## Features

- **TradingView Widget**: Embedded advanced chart from TradingView, showing real-time data for Bitcoin (BTC/USDT) with adjustable settings.
- **Navigation**: Includes multiple navigation sections like Overview, Team, Sentiments, and more.
- **Routing**: Uses React Router to navigate between different sections of the app.
- **Performance Tracking**: Displays performance-related information, including tokenomics and market sentiments.

## Technologies Used

- React
- React Router
- TradingView External Widget
- CSS

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate into the project folder:

   ```bash
   cd <project_name>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000/`.

## File Structure

- `App.js`: Main file where the routes are defined for different views.
- `components/TradingViewWidget.js`: Contains the embedded TradingView widget and navigation components.
- `nav-items/Overview.js`: Displays the performance, sentiments, tokenomics, and other sections.
- `nav-items/Fundamentals.js`: Displays the fundamentals section.
- `nav-items/Team.js`: Displays team information.
- `nav-items/Sentiments.js`: Displays market sentiments.
- `nav-items/About.js`: Displays about section.
- `components/Navbar.js`: Main navigation bar component.
- `components/Navbar2.js`: Secondary navigation bar component.
- `components/Tokenomics.js`: Displays tokenomics-related information.

## Usage

- **TradingView Widget**: The TradingView widget will show a live chart of Bitcoin (BTC/USDT). It has options for changing the symbol, interval, and other chart features.
  
- **Navigation**: You can switch between different sections using the sidebar navigation or direct routes in the URL.

## Example Routes

- `/` : Displays the TradingView chart along with Overview, Team, and Sentiments sections.
- `/fundamentals` : Shows the fundamentals of the token.
- `/overview` : Displays detailed market analysis, tokenomics, and performance data.
- `/team` : Displays team information.
- `/sentiments` : Displays market sentiment analysis.
- `/about` : Displays information about the project.

## Screenshots
Here are some of the Screenshots which are used for Reference. 
![Screenshot 2025-01-15 171232](https://github.com/user-attachments/assets/43c60431-5e24-441b-ba31-dbb725a27c59)


![Screenshot 2025-01-15 171250](https://github.com/user-attachments/assets/2f605e1f-3839-475c-b318-4c71a1c697c9)

![Screenshot 2025-01-15 171307](https://github.com/user-attachments/assets/ab6d5114-06fc-4740-bdd1-387345090208)


## Contributing

Feel free to fork the project, make your changes, and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
