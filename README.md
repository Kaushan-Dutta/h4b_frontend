# Rail Bhoj


Rail Bhoj is a pantry Food and vendor Management System is designed to streamline and optimize the entire food supply chain for IRCTC. This comprehensive system offers robust solutions for managing pantry stocks, ensuring efficient inventory control, and facilitating seamless interactions with vendors.

* **QR Code** for **Vendor Verification**.
* Seamless **Food Ordering**, **Wastage Prevention** for travelling passengers.
 
* **Admin Dashboard** for proper Inventory management and **Data Analytics** for tracking respective food item utilization in a particular Train Route.
* To efficiently **estimate demand** for different food items in particular pantry.
  
* To **rate and review** the pantry for improving the overall food management system in trains.

## Installation

To run this particular project in your own local machine you need to follow the following steps carefully.

#### Make a new folder

```bash
Create a new folder where you want to clone the files.
```
#### Open terminal inside the new created folder

```bash
git clone https://github.com/Kaushan-Dutta/h4b_frontend.git
```
#### Move inside the root directory

```bash
cd .\h4b_frontend\
```
#### Install the required packages

```bash
npm i
```
#### Create the environment variable
```bash
  VITE_APP_SERVER_URL=https://h4b-backend.vercel.app/
```
#### Launch the Web App
```bash
 npm run dev
```

## How It Works / Usage Details

1. Each Vendor is assigned with a unique qr code for their identification and association with IRCTC.
2. Either the user can scan the qr code of the vendor of the user can visit the website directly, create a new journey and place order.
3. Based on the order the user will get the requested food Item in the next station.
4. Based on the food ordered the user can either pay cash directly or user can use gpay to pay.
5. Also the user can report for any griviances or wastage through ratings and reviews for the pantry 

### Technologies used
 - React
 - MongoDB
 - Streamlit Data visualization and prediction
 - Node.js
 - Taiwind
 - Express

