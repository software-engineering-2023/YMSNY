import React, { useState } from 'react'

const Transfer = () => {
    const [transferType, setTransferType] = useState('')
    const [bankAccountNumber, setBankAccountNumber] = useState('')
    const [amount, setAmount] = useState('')
    const [bank, setBank] = useState('')
    const [country, setCountry] = useState('')

    const handleTransferTypeChange = (e) => {
        setTransferType(e.target.value)
    }

    return (
        <div className="transfer">
            <h1>Transfer Money </h1>
            <div className="radioButtons">
                <div>
                    <input type="radio" id="domestic" name="transferType" value="domestic" onChange={handleTransferTypeChange} />
                    <label htmlFor="domestic">Domestic</label>
                </div>
                <div>
                    <input type="radio" id="internal" name="transferType" value="internal" onChange={handleTransferTypeChange} />
                    <label htmlFor="internal">Internal</label>
                </div>
                <div>
                    <input type="radio" id="external" name="transferType" value="external" onChange={handleTransferTypeChange} />
                    <label htmlFor="external">External</label>
                </div>
            </div>
            {transferType === 'internal' && (
                <>
                    <div>
                        <label htmlFor="bankAccountNumber">Bank Account Number:</label>
                        <input type="text" id="bankAccountNumber" name="bankAccountNumber" value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="amount">Amount:</label>
                        <input type="text" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                </>
            )}
            {transferType === 'domestic' && (
                <>
                    <div>
                        <label htmlFor="bankAccountNumber">Bank Account Number:</label>
                        <input type="text" id="bankAccountNumber" name="bankAccountNumber" value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="amount">Amount:</label>
                        <input type="text" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="bank">Bank:</label>
                        <input type="text" id="bank" name="bank" value={bank} onChange={(e) => setBank(e.target.value)} />
                    </div>
                </>
            )}
            {transferType === 'external' && (
                <>
                    <div>
                        <label htmlFor="bankAccountNumber">Bank Account Number:</label>
                        <input type="text" id="bankAccountNumber" name="bankAccountNumber" value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="amount">Amount:</label>
                        <input type="text" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="bank">Bank:</label>
                        <input type="text" id="bank" name="bank" value={bank} onChange={(e) => setBank(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="country">Country:</label>
                        <input type="text" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                </>
            )}

            <br/>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: "0.5rem" }}>
                <button> Pay
                    <span></span>
                </button>
            </div>
        </div>

    )
}

export default Transfer;
