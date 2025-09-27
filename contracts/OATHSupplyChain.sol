pragma solidity ^0.8.0;

contract OATHSupplyChain {
    mapping(string => bytes32) public batchDataHashes; // For Manufacturer
    mapping(string => string) public patientPrescriptions; // For Doctor/Patient
    mapping(string => bool) public dispensedBatches; // For Pharmacy

    event BatchMinted(string medicineENS, string batchNo, bytes32 hash);
    event PrescriptionIssued(string patientENS, string medicineENS, string dosage, string frequency);
    event DrugDispensed(string batchNo, string patientENS, string doctorENS);

    function mintBatchHash(string memory medicineENS, string memory batchNo, uint quantity, string memory dateOfManufacture) public {
        bytes32 hash = keccak256(abi.encodePacked(medicineENS, batchNo, quantity, dateOfManufacture));
        batchDataHashes[batchNo] = hash;
        emit BatchMinted(medicineENS, batchNo, hash);
    }

    function issuePrescription(string memory patientENS, string memory medicineENS, string memory dosage, string memory frequency) public {
        string memory prescriptionHash = string(abi.encodePacked(patientENS, medicineENS, dosage, frequency));
        patientPrescriptions[patientENS] = prescriptionHash;
        emit PrescriptionIssued(patientENS, medicineENS, dosage, frequency);
    }

    function dispenseDrug(string memory batchNo, string memory patientENS, string memory doctorENS) public {
        require(batchDataHashes[batchNo] != bytes32(0), "Batch does not exist");
        dispensedBatches[batchNo] = true;
        emit DrugDispensed(batchNo, patientENS, doctorENS);
    }
}