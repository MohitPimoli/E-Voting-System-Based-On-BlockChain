# E-Voting System

A decentralised voting system based on [Ethereum blockchain](https://ethereum.org/dapps/) technology.

> This started as a final year project for the IT Degree that I was/am pursuing, now aiming to make this more than that.

## System Workflow

A brief explanation on the basic workflow of the application.

- Admin will create a voting instance by launching/deploying the system in a blockchain network (EVM), then create an election instance and start the election with the details of the election filled in (including candidates for voters to vote).
- Then the likely voters connect to the same blockchain network register to become a voter. Once the users successfully register, their respective details are sent/displayed in the admins' panel (i.e. verification page).
- The admin then will check if the registration information (blockchain account address, name, and phone number) is valid and matches with his record. If yes, then the admin approves the registered user making them eligible to take part and cast their respective vote in the election.
- The registered user (voter) following the approval from the admin casts their vote to the candidate of interest (from the voting page).
- After some time, depending on the scale of the election the admin ends the election. As that happens the voting is closed and the results are displayed announcing the winner at the top of the results page.

  **See demo [here](https://youtu.be/nh1zfTTrdII "Watch dVoting demo").**

---

## Setting up the development environment

### Requirements

- [Node.js](https://nodejs.org).
- [Truffle](https://www.trufflesuite.com/truffle).
- [Ganache](https://github.com/trufflesuite/ganache-cli) (Cli).
- [Metamask](https://metamask.io/) (Browser Extension).
- Two Different web browser.

#### Getting the requirements

1. Download and install **NodeJS**[Download](https://nodejs.org/en/download/ "Go to official NodeJS download page.").

1. Install **truffle** and **ganache-cli** using node packager manager (npm)

   ```shell
   npm install -g truffle
   npm install -g ganache-cli
   ```

1. Install **metamask** browser extension

   Download and install metamask from [Download](https://metamask.io/download "Go to official metamask download page.").

### Configuring the project for development

1. Clone this repository or Download zip file.[Download](https://github.com/MohitPimoli/E-Voting-System-Based-On-BlockChain/archive/refs/heads/master.zip)

   ```shell
   git clone https://github.com/MohitPimoli/E-Vpting-System-Based-On-BlockChain.git
   ```
2. Open terminals on same directory.
   ```shell
   your:\path\to\E-Voting-System-Based-On-BlockChain\
   ```
   
3. Run local Ethereum blockchain on the terminal

   ```shell
   ganache-cli
   ```

   > Note: Do not close `ganache-cli` (the blockchain network needs to be running all the time)

4. Configure metamask on the browser with the following details
   You need to add new network.
   
   ![Screenshot 2024-06-27 084254](https://github.com/MohitPimoli/E-Voting-System-Based-On-BlockChain/assets/114788978/e1b98cc1-d12a-4444-b420-a96bba51a845)

   Select a Network >> Add Network >> Add a Network Manually
   - New RPC URL: `http://127.0.0.1:8545`
   - Chain ID: `1337`

5. Import account(s) using private keys from ganache-cli to the metamask extension on the browser

![image](https://github.com/MohitPimoli/E-Voting-System-Based-On-BlockChain/assets/114788978/a7d01909-a68b-4f96-ba86-73800ef0a2eb)

Add account or hardware wallet >> import account >> Enter private key string

![image](https://github.com/MohitPimoli/E-Voting-System-Based-On-BlockChain/assets/114788978/f30b18b4-95a6-4623-bee1-e925229668fd)

- NOTE:- Use 1st private key for admin account and other keys for normal user. And you need to setup admin account in one browser and user account in another browser.
6. Deploy smart contract to the (local) blockchain network (i.e ganache-cli). open 2nd terminal
   ```shell
   cd Voting
   truffle migrate
   ```

   > Note: Use `truffle migrate --reset` for re-deployments
7. Open project in VScode and start backend, type in the terminal.
   ```bash
   cd Backend
   npm install
   node index.js
   ```
   - if it shows the output `Server is running on port 5001`. You are good to go. If not, then
     there is a problem in `npm install`.
8. Launch the development server (frontend). In 2nd terminal. 

   ```shell
   cd client
   npm install
   npm start
   ```

   > If you encounter **error** during `npm install`, please note that you might need to install Microsoft Visual C++ Redistributable packages from [learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) (here is the direct download link for X64: [aka.ms/vs/17/release/vc_redist.x64.exe](https://aka.ms/vs/17/release/vc_redist.x64.exe))

## To-Do List

Possible features to add/improve within the app.

- [ ] **Email Verification**—adding email/phone verification (OTP, etc..) while registering for voters.
- [ ] **Automated Verification**—adding an automated verification (rather than manually approving by the admin) for the registered users. This could be based on the custom cooperation email, custom list of emails, or custom list of phone numbers, etc.
- [ ] **Report**—option to generate a report at the end of an election. The report could contain a range of information including the number of people that were eligible to vote, the number of people that participated in the election, a bar-chart/pie-chart showing the election statistics, etc.
- [ ] **Workflow improvements**—overall workflow improvements (eg. option to add candidates within the election setup page), with overall GUI improvements.
- [ ] **Multiple election instance**—ability to create multiple election instances without having to re-deploy the smart contract.
