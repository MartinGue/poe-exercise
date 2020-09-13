pragma solidity >=0.5.0 <0.7.0;
// Proof of Existence contract, version 3
contract ProofOfExistence3 {
  mapping (bytes32 => bool) private proofs;
  // store a proof of existence in the contract state
  function storeProof(bytes32 proof) public {
    proofs[proof] = true;
  }
  // calculate and store the proof for a document
  function notarize(string memory document) public {
    bytes32 proof = proofFor(document);
    storeProof(proof);
  }
  // helper function to get a document's sha256
  function proofFor(string memory document) public pure returns (bytes32) {
    return sha256(bytes(document));
  }
  // check if a document has been notarized
  function checkDocument(string memory document) public view returns (bool) {
    bytes32 proof = proofFor(document);
    return hasProof(proof);
  }
  // returns true if proof is stored
  function hasProof(bytes32 proof) public view returns(bool) {
    return proofs[proof];
  }
}