import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ted',
  templateUrl: './ted.component.html',
  styleUrls: ['./ted.component.css']
})
export class TedComponent implements OnInit {
  /**
   * We’ll accept the API response as a loose “any” so that
   * fields like “busDate” or “srcSystemId” don’t break the compiler.
   */
  apiData: any;

  ngOnInit(): void {
    // Paste your entire JSON response here (or assign it from a real HTTP call).
    this.apiData = {
  "depoAccountId": null,
  "frbReportedBal": 10818848376403.752,
  "bnymCurrentBal": 10818937136636.752,
  "reconDiffPar": 88760233,
  "diffCusipCount": 1,
  "reconResults": "OUT-OF-PROOF",
  "totalFrbCount": 4084,
  "totalTradedCount": 4040,
  "redemptionCount": 38,
  "redemptionPar": 6661975000,
  "lastRefreshDate": "2025-May-12 20:58:06.820",
  "lastRefreshTime": null,
  "stmtDate": null,
  "depoBalances": [
    {
      "depoAccountId": "7010",
      "cusipCount": 0,
      "parBreakCusipCount": 1,
      "parBreak": 88760233,
      "frbPar": -88760233,
      "bnymPar": 0,
      "reconResult": null,
      "bCount": 1,
      "cCount": 0,
      "cusipList": [
        {
          "scyInsmId": "38381MFF2",
          "frbPosition": -88760233,
          "bdcPosition": 0,
          "bdcCollTrustReceiptPosition": 0,
          "parBreak": -88760233,
          "reconResult": "OVER-FED",
          "repoType": null,
          "repoIn": 0,
          "repoOut": 0,
          "awvlPar": 0,
          "anfePar": 0,
          "awvrPar": 0
        }
      ]
    },
    {
      "depoAccountId": "1020",
      "cusipCount": 2519,
      "parBreakCusipCount": 0,
      "parBreak": 0,
      "frbPar": 6990765618954.682,
      "bnymPar": 6990765618954.682,
      "reconResult": null,
      "bCount": 0,
      "cCount": 2519,
      "cusipList": []
    },
    {
      "depoAccountId": "1090",
      "cusipCount": 1080,
      "parBreakCusipCount": 0,
      "parBreak": 0,
      "frbPar": 3812413337796.07,
      "bnymPar": 3812413337796.07,
      "reconResult": null,
      "bCount": 0,
      "cCount": 1080,
      "cusipList": []
    },
    {
      "depoAccountId": "1030",
      "cusipCount": 383,
      "parBreakCusipCount": 0,
      "parBreak": 0,
      "frbPar": 2139976386,
      "bnymPar": 2139976386,
      "reconResult": null,
      "bCount": 0,
      "cCount": 383,
      "cusipList": []
    },
    {
      "depoAccountId": "1080",
      "cusipCount": 39,
      "parBreakCusipCount": 0,
      "parBreak": 0,
      "frbPar": 8681900000,
      "bnymPar": 8681900000,
      "reconResult": null,
      "bCount": 0,
      "cCount": 39,
      "cusipList": []
    },
    {
      "depoAccountId": "U102",
      "cusipCount": 12,
      "parBreakCusipCount": 0,
      "parBreak": 0,
      "frbPar": 2261303500,
      "bnymPar": 2261303500,
      "reconResult": null,
      "bCount": 0,
      "cCount": 12,
      "cusipList": []
    },
    {
      "depoAccountId": "1050",
      "cusipCount": 4,
      "parBreakCusipCount": 0,
      "parBreak": 0,
      "frbPar": 0,
      "bnymPar": 0,
      "reconResult": null,
      "bCount": 0,
      "cCount": 4,
      "cusipList": []
    },
    {
      "depoAccountId": "1031",
      "cusipCount": 3,
      "parBreakCusipCount": 0,
      "parBreak": 0,
      "frbPar": 2675000000,
      "bnymPar": 2675000000,
      "reconResult": null,
      "bCount": 0,
      "cCount": 3,
      "cusipList": []
    }
  ],
  "bdcFrbCashSummary": [
    {
      "description": "BDC",
      "creditAmount": 1624050104212.62,
      "creditCount": 64535,
      "debitAmount": 1595034338497.34,
      "debitCount": 61154,
      "netAmount": 29015765715.28,
      "date": null,
      "result": null,
      "setlGlPostings": null
    },
    {
      "description": "FRB",
      "creditAmount": 1624050104212.62,
      "creditCount": 56432,
      "debitAmount": 1595034338497.34,
      "debitCount": 53604,
      "netAmount": 29015765715.28,
      "date": 1747083406477,
      "result": null,
      "setlGlPostings": null
    },
    {
      "description": "OFF-BY",
      "creditAmount": 0,
      "creditCount": -8103,
      "debitAmount": 0,
      "debitCount": -7550,
      "netAmount": 0,
      "date": null,
      "result": null,
      "setlGlPostings": null
    }
  ],
  "netSetlSummaryVo": {
    "description": null,
    "creditAmount": 1617109937166.28,
    "creditCount": 64432,
    "debitAmount": 1595034338497.34,
    "debitCount": 61154,
    "netAmount": 22075598668.94,
    "date": null,
    "result": "IN-PROOF",
    "setlGlPostings": [
      {
        "busDate": null,
        "srcSystemId": null,
        "regionId": 0,
        "instanceId": null,
        "lstUpdateUserId": null,
        "lstUpdateTs": 0,
        "glPostingId": "TMP0CG1320000002",
        "glAcNo": "2162142",
        "drCrCd": "CR",
        "glPostingCd": "63",
        "glPostingAmount": 22075598668.94,
        "acctId": "TMP",
        "clrInstId": "BNYMELLON",
        "proofGroupId": "NJ88",
        "acpCategoryCd": "14",
        "cashPostingId": null,
        "statCd": "STLD",
        "addRefNumber": "TMP0051225000002",
        "descTx": "BDS SETTLEMENT 05/12/25",
        "crtTs": 1747082702000,
        "lstUpdUserId": "XECCGPZ",
        "lstUpdTs": "2025-May-12 17:22:30.000",
        "glPstDate": "2025-May-12",
        "costCenterCd": "0740150",
        "fromIdcNo": null,
        "toIdcNo": null
      },
      {
        "busDate": null,
        "srcSystemId": null,
        "regionId": 0,
        "instanceId": null,
        "lstUpdateUserId": null,
        "lstUpdateTs": 0,
        "glPostingId": "TMP0DG1320000001",
        "glAcNo": "1132010",
        "drCrCd": "DR",
        "glPostingCd": "63",
        "glPostingAmount": 22075598668.94,
        "acctId": "TMP",
        "clrInstId": "BNYMELLON",
        "proofGroupId": "NJ88",
        "acpCategoryCd": "14",
        "cashPostingId": null,
        "statCd": "STLD",
        "addRefNumber": "TMP0051225000001",
        "descTx": "BDS SETTLEMENT 05/12/25",
        "crtTs": 1747082702000,
        "lstUpdUserId": "XECCGPZ",
        "lstUpdTs": "2025-May-12 17:22:31.000",
        "glPstDate": "2025-May-12",
        "costCenterCd": "3371010",
        "fromIdcNo": null,
        "toIdcNo": null
      }
    ]
  }
};
  }

  /** Lookup parBreak for a given depo ID, or empty string if zero */
  getParBreak(depoId: string): string {
    const found = this.apiData.depoBalances.find((d: any) => d.depoAccountId === depoId);
    if (!found) return '';
    return found.parBreak !== 0
      ? found.parBreak.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : '';
  }

  /** Lookup number of CUSIPs (cCount) for a given depo ID */
  getCusipCount(depoId: string): number {
    const found = this.apiData.depoBalances.find((d: any) => d.depoAccountId === depoId);
    return found ? found.cCount : 0;
  }

  /** Find the “DR” posting in netSetlSummaryVo.setlGlPostings */
  getDebitPosting(): any {
    return this.apiData.netSetlSummaryVo.setlGlPostings.find((p: any) => p.drCrCd === 'DR');
  }

  /** Find the “CR” posting in netSetlSummaryVo.setlGlPostings */
  getCreditPosting(): any {
    return this.apiData.netSetlSummaryVo.setlGlPostings.find((p: any) => p.drCrCd === 'CR');
  }
}
