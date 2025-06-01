import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dod',
  templateUrl: './dod.component.html',
  styleUrls: ['./dod.component.css']
})
export class DodComponent implements OnInit {
  // Define properties that the template will bind to
  reconciliationResults: any;
  depositoryAccountResults: any;
  externalSettlements: any[];
  netSecuritiesSettlements: any[];
  settlementGLPostings: any;

  // Mock‐data object (copy/paste of the JSON as a TS object)
  private mockData = {
    reconciliationResults: {
      frbReportedPositions: 11135398312558.43,
      frbReportedCusipCount: 16524,
      bnyCurrentPositions: 11135398312558.43,
      bdcExternalCusipCount: 16449,
      reconDiffParValue: 844407800.00,
      frbRedemptionCusipCount: 70,
      reconDiffSecurityCount: 2,
      frbRedemptionPar: 14141699000.00
    },
    depositoryAccountResults: {
      "1020": "26R3",
      "1030": "",
      "1090": "",
      "1080": "",
      "U102": "",
      "1050": "",
      "1031": "",
      "1040": ""
    },
    externalSettlements: [
      {
        description: "BDC",
        creditAmount: 1780508987992.01,
        creditCount: 63583,
        debitAmount: 1762478046970.19,
        debitCount: 77765,
        netValue: 18030941021.82
      },
      {
        description: "FRB",
        creditAmount: 1780508987992.01,
        creditCount: 63587,
        debitAmount: 1762478046970.19,
        debitCount: 66668,
        netValue: 18030941021.82
      },
      {
        description: "OFF-BY",
        creditAmount: 0.00,
        creditCount: 21547,
        debitAmount: 0.00,
        debitCount: 15067,
        netValue: 0.00
      }
    ],
    netSecuritiesSettlements: [
      {
        transferType: "Receives",
        count: 7712,
        sumNetAmount: 1762473167253.14,
        netDifference: 3752654066.18
      },
      {
        transferType: "Delivers",
        count: 85256,
        sumNetAmount: 1982225821898.32,
        netDifference: 3752654066.18
      }
    ],
    settlementGLPostings: {
      glPstIdDebit: "TMPD001480000001",
      glPstIdCredit: "TMPDC01480000002",
      glPstDtDebit: "2025-May-28",
      glPstDtCredit: "2025-May-28",
      glAcctDebit: 1132010,
      glAcctCredit: 2162142,
      costCenterDebit: 3370100,
      costCenterCredit: 6740150,
      glPstAmtDebit: 3752654068.18,
      glPstAmtCredit: 3752654068.18,
      statusDebit: "STLD",
      statusCredit: "STLD",
      lstUpdTsDebit: "2025-May-28 17:07:25.000",
      lstUpdTsCredit: "2025-May-28 17:07:25.000",
      lstUpdUserDebit: "XECOOCPZ",
      lstUpdUserCredit: "XECOOCPZ"
    }
  };

  ngOnInit(): void {
    // Assign mock data to component properties so template can bind to them
    this.reconciliationResults = this.mockData.reconciliationResults;
    this.depositoryAccountResults = this.mockData.depositoryAccountResults;
    this.externalSettlements = this.mockData.externalSettlements;
    this.netSecuritiesSettlements = this.mockData.netSecuritiesSettlements;
    this.settlementGLPostings = this.mockData.settlementGLPostings;
  }
}
