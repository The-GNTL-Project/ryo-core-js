// Copyright (c) 2019, Ryo-currency
// Copyright (c) 2014-2018, MyMonero.com
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//	conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//	of conditions and the following disclaimer in the documentation and/or other
//	materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//	used to endorse or promote products derived from this software without specific
//	prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
"use strict"
//
const BigInt = require("big-integer")
//
export default {
    // Number of atomic units in one unit of currency. e.g. 12 => 10^12 = 1000000000000
    coinUnitPlaces: 9,

    // Minimum number of confirmations for a transaction to show as confirmed
    txMinConfirms: 4,

    // Currency symbol
    coinSymbol: "GNTL",

    // OpenAlias prefix
    openAliasPrefix: "gntl",

    // Currency name
    coinName: "GNTL",

    // Payment URI Prefix
    coinUriPrefix: "gntl:",

    // Prefix code for addresses
    addressPrefix: 504557,
    integratedAddressPrefix: 1848045,
    subaddressPrefix: 2159341,

    // Dust threshold in atomic units
    // 2*10^6 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    dustThreshold: BigInt("2000000"),

    // Maximum block number, used for tx unlock time
    maxBlockNumber: 500000000,

    // Average block time in seconds, used for unlock time estimation
    avgBlockTime: 120,
}
