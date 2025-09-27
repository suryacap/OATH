const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("OATHSupplyChain", function () {
    let OATHSupplyChain;
    let supplyChain;

    beforeEach(async function () {
        OATHSupplyChain = await ethers.getContractFactory("OATHSupplyChain");
        supplyChain = await OATHSupplyChain.deploy();
        await supplyChain.deployed();
    });

    describe("Minting Batch Hash", function () {
        it("Should mint a new batch hash", async function () {
            const medicineENS = "0x1234567890abcdef1234567890abcdef12345678";
            const batchNo = "Batch123";
            const quantity = 100;
            const dateOfManufacture = "2023-10-01";
            const receipt = ethers.utils.formatBytes32String("ReceiptData");

            await supplyChain.mintBatchHash(medicineENS, batchNo, quantity, dateOfManufacture, receipt);

            const batchHash = await supplyChain.batchDataHashes(batchNo);
            expect(batchHash).to.not.equal(ethers.constants.HashZero);
        });
    });

    describe("Issuing Prescription", function () {
        it("Should issue a prescription", async function () {
            const patientENS = "0xabcdefabcdefabcdefabcdefabcdefabcdef";
            const medicineENS = "0x1234567890abcdef1234567890abcdef12345678";
            const dosage = "500mg";
            const frequency = "Once a day";

            await supplyChain.issuePrescription(patientENS, medicineENS, dosage, frequency);

            const prescriptionHash = await supplyChain.patientPrescriptions(patientENS);
            expect(prescriptionHash).to.not.equal("");
        });
    });

    describe("Dispensing Drug", function () {
        it("Should dispense a drug", async function () {
            const batchNo = "Batch123";
            const patientENS = "0xabcdefabcdefabcdefabcdefabcdefabcdef";
            const doctorENS = "0x1234567890abcdef1234567890abcdef12345678";

            await supplyChain.mintBatchHash("0x1234567890abcdef1234567890abcdef12345678", batchNo, 100, "2023-10-01", ethers.utils.formatBytes32String("ReceiptData"));
            await supplyChain.dispenseDrug(batchNo, patientENS, doctorENS);

            const isDispensed = await supplyChain.dispensedBatches(batchNo);
            expect(isDispensed).to.equal(true);
        });
    });
});