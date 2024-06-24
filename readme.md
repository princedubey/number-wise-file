# File System Number Wise Project 

This Node.js project processes input numbers, multiplies them by 7, and stores the results in different files based on specific conditions. Once a number is stored in all files (A to D), no further numbers can be entered.


## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed

## Setup

### Step 1: Clone the Repository

```sh
git clone <this repo url>
cd thi project file
npm install

## API Endpoints

### POST /input-number
des- Accepts a number, multiplies it by 7, and stores the result in the appropriate file based on specific conditions.
api -http://localhost:3000/input-number
payload - {
            "number": 5
          }

response - {
  "message": "Number processed successfully.",
  "result": 35
}

#### conditions
Conditions:

If the result is greater than 140, it is stored in fileA.json.
If the result is greater than 100, it is stored in fileB.json.
If the result is greater than 60, it is stored in fileC.json.
All other results are stored in fileD.json.
Once all files (A to D) contain at least one number, no further inputs are allowed.

### GET /list-numbers
des- Lists all numbers stored in all files.
api - http://localhost:3000/list-numbers

response - {
  "fileA": [/* numbers */],
  "fileB": [/* numbers */],
  "fileC": [/* numbers */],
  "fileD": [/* numbers */]
}

#Thank you
##Prince Dubey






