pragma solidity >=0.5.0 <0.7.0;

//Proof of Existence contract, version 1
contract ProofOfExistence1 {
    // state
    bytes32 public proof;

    //calculate and store the proof for the document
    //*transactional function*
    function notarize(string memory document) public {
        proof = proofFor(document);
    }

    //helper function to get documents sha256
    function proofFor(string memory document) public view returns (bytes32) {
        return sha256(bytes(document));
    }
}
