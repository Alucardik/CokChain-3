pragma solidity >=0.8.0;

// SPDX-License-Identifier: UNLICENSED

contract test {
    event AddEvent(string key);
    event DeleteEvent(string key);

    struct ExampleStruct {
        string content;
        uint len;
        bool someTrait;
    }

    mapping (string => ExampleStruct) public examples;

    function addExampleStruct(string calldata key, string calldata content, uint len, bool trait) external {
        examples[key] = ExampleStruct(content, len, trait);
        emit AddEvent(key);
    }

    function removeExampleStruct(string calldata key) external {
        delete examples[key];
        emit DeleteEvent(key);
    }

}