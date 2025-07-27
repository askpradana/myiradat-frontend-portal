export interface ProfileSummaryResponse {
  data: {
    profile: Profile;
    consults: Consults;
    tests: Tests;
  };
}

export interface Profile {
  email: string;
  noHp: string;
  name: string;
}

export interface Consults {
  consultDate: string | null;
  latestAnalysisResult: string;
  latestComments: string | null;
}

export interface Tests {
  ipro: IproTest;
  iprob: IprobTest;
  ipros: IprosTest;
}

export interface IproTest {
  testTakenDate: string | null;
  result: IproResult;
}

export interface IprobTest {
  testTakenDate: string | null;
  result: IprobResult;
}

export interface IprosTest {
  testTakenDate: string | null;
  result: IprosResult;
}

export interface IproResult {
  kecerdasanUmum: string;
  dayaAnalisaSintesa: string;
  dayaBerpikirAbtrak: string;
  logikaBerpikir: string;
  kelincahanPikir: string;
  inisiatif: string;
  perencanaanDanPerorganisasian: string;
  sistematikaKerja: string;
  fleksibilitas: string;
  dayaTahanKerjaRutin: string;
  dayaTahanKerjaStress: string;
  stabilitasEmosi: string;
  penyesuaianDiri: string;
  hubunganInterpersonal: string;
  kerjasama: string;
  kepercayaanDiri: string;
  kepemimpinan: string;
  pengambilanKeputusan: string;
  motivasiBerprestasi: string;
  komitmenTugas: string;
}

export interface IprosResult {
  hubunganInterpersonal: string;
  kecepatanPerseptual: string;
  kecerdasanUmum: string;
  kemandirian: string;
  ketangguhan: string;
  ketelitianKerja: string;
  motivasiBerprestasi: string;
  penalaranNonVerbal: string;
  penalaranNumerik: string;
  penalaranVerbal: string;
  penyesuaianDiri: string;
  sistematikaKerja: string;
}
