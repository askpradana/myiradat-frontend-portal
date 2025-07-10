import { Card, Descriptions } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/id";

const DataView = () => {
  const data = {
    profile: {
      email: "user@example.com",
      no_hp: "+6281234567890",
      nama: "Putra Iradat",
    },
    consults: {
      consult_date: "2025-07-09",
      latest_analysis_result: "2025-07-08",
      latest_comments: [
        { id: 0, comment: "Hasil analisa cukup baik untuk tahap awal." },
        {
          id: 1,
          comment: "Kemampuan komunikasi menunjukkan perkembangan positif.",
        },
      ],
    },
    tests: {
      ipros: {
        test_taken_date: "2025-07-01",
        result: {
          hubugan_interpersonal: "Mampu bekerja sama dalam tim dengan baik.",
          kecepatan_perseptual: "Merespons informasi secara cepat dan tepat.",
          kecerdasan_umun:
            "Berpikir logis dan sistematis dalam menyelesaikan tugas.",
          kemandirian: "Dapat mengambil keputusan tanpa banyak arahan.",
          ketangguhan: "Tahan terhadap tekanan kerja dalam jangka waktu lama.",
          ketelitian_kerja: "Memperhatikan detail dan minim kesalahan.",
          motivasi_berprestasi:
            "Memiliki semangat tinggi untuk mencapai target.",
          penalaran_non_verbal: "Mampu memahami pola dan bentuk secara visual.",
          penalaran_numerik: "Cukup baik dalam mengolah data angka dan logika.",
          penalaran_verbal: "Komunikatif dan mudah memahami instruksi lisan.",
          penyesuain_diri: "Fleksibel terhadap perubahan lingkungan kerja.",
          sistematika_kerja:
            "Menata pekerjaan dengan urutan yang jelas dan efisien.",
        },
      },
      iprob: {
        test_taken_date: "2025-07-01",
        result: {
          kecerdasan_umum: "Cepat memahami konsep baru dan logis.",
          daya_analisa_sintesa:
            "Menganalisa informasi dan menyimpulkan dengan baik.",
          daya_berpikir_abtrak: "Mampu memahami konsep yang tidak konkret.",
          logika_berpikir: "Memiliki pola pikir logis dan terstruktur.",
          kelincahan_pikir:
            "Responsif terhadap perubahan informasi secara cepat.",
          inisiatif: "Mampu memulai tindakan tanpa harus disuruh.",
          perencanaan_dan_perorganisasian:
            "Mengatur tugas dengan rencana yang jelas.",
          sistematika_kerja: "Proses kerja tersusun dan tidak terburu-buru.",
          fleksibilitas: "Menyesuaikan diri dalam berbagai situasi kerja.",
          daya_tahan_kerja_rutin: "Tetap konsisten meskipun tugas monoton.",
          daya_tahan_kerja_stress: "Stabil saat menghadapi tekanan tinggi.",
          stabilitas_emosi: "Mengendalikan emosi dalam situasi sulit.",
          penyesuaian_diri: "Cepat beradaptasi terhadap perubahan.",
          hubungan_interpersonal:
            "Bersosialisasi dengan baik di lingkungan kerja.",
          kerjasama: "Memberikan kontribusi aktif dalam tim.",
          kepercayaan_diri: "Percaya pada kemampuan diri sendiri.",
          kepemimpinan: "Dapat mengarahkan orang lain secara efektif.",
          pengambilan_keputusan:
            "Memilih tindakan terbaik dalam waktu singkat.",
          motivasi_berprestasi: "Bersemangat mengejar hasil maksimal.",
          komitmen_tugas: "Selalu menyelesaikan pekerjaan tepat waktu.",
        },
      },
      ipro: {
        test_taken_date: "2025-07-01",
        result: {
          kecerdasan_umum: "Memiliki tingkat kecerdasan di atas rata-rata.",
          daya_analisa_sintesa: "Analisa cepat dan mampu menyatukan informasi.",
          daya_berpikir_abtrak: "Memahami simbol dan pola secara efisien.",
          logika_berpikir: "Berpikir dengan urutan dan alasan yang jelas.",
          kelincahan_pikir: "Cepat dalam mengubah pendekatan saat diperlukan.",
          inisiatif: "Selalu mengambil langkah proaktif terlebih dahulu.",
          perencanaan_dan_perorganisasian:
            "Rencana kerja tertata dan realistis.",
          sistematika_kerja: "Tugas diselesaikan berdasarkan prioritas logis.",
          fleksibilitas: "Menyesuaikan strategi kerja sesuai situasi.",
          daya_tahan_kerja_rutin: "Konsisten walau pekerjaan berulang.",
          daya_tahan_kerja_stress: "Mampu bekerja dengan tenang saat deadline.",
          stabilitas_emosi: "Tidak mudah terpancing emosi saat tertekan.",
          penyesuaian_diri: "Cepat berbaur di lingkungan baru.",
          hubungan_interpersonal: "Menjaga hubungan baik dengan rekan kerja.",
          kerjasama: "Aktif mendukung tim dalam menyelesaikan proyek.",
          kepercayaan_diri: "Yakin dengan kemampuan dan keputusan pribadi.",
          kepemimpinan: "Mampu membimbing dan memberi arahan tim.",
          pengambilan_keputusan: "Efektif dalam memilih solusi terbaik.",
          motivasi_berprestasi: "Berusaha maksimal untuk pencapaian kerja.",
          komitmen_tugas: "Dedikasi tinggi terhadap tanggung jawabnya.",
        },
      },
    },
  };

  const renderConsults = (consults: {
    consult_date: string;
    latest_analysis_result: string;
    latest_comments: { id: number; comment: string }[];
  }) => (
    <Descriptions
      bordered
      size="small"
      column={1}
      labelStyle={{
        fontWeight: "bold",
        textTransform: "capitalize",
        width: 200,
      }}
    >
      <Descriptions.Item label="Tanggal Konsultasi" className="bg-green-100">
        {dayjs(consults.consult_date).format("DD MMMM YYYY")}
      </Descriptions.Item>

      <Descriptions.Item label="Analisis Terakhir" className="bg-green-100">
        {dayjs(consults.latest_analysis_result).format("DD MMMM YYYY")}
      </Descriptions.Item>

      {consults.latest_comments.map((item, index) => (
        <Descriptions.Item key={index} label={`Komentar ${index + 1}`}>
          {item.comment?.trim() || "Komentar kosong"}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );

  const renderResultDescription = (
    result: Record<string, string>,
    testDate: string
  ) => (
    <Descriptions
      bordered
      size="small"
      layout="horizontal"
      column={1}
      className="custom-description"
      labelStyle={{
        fontWeight: "bold",
        textTransform: "capitalize",
        width: 200,
      }}
    >
      <Descriptions.Item label="Tanggal Tes" className="bg-green-100">
        {dayjs(testDate).format("DD MMMM YYYY")}
      </Descriptions.Item>

      {Object.entries(result).map(([key, value]) => (
        <Descriptions.Item
          key={key}
          label={key
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        >
          {value || "Belum ada hasil"}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );

  return (
    <>
      {/* Consults */}
      <Card title="IMPROVE CARE" className="shadow-md m-4">
        {renderConsults(data.consults)}
      </Card>

      {/* IPro */}
      <Card title="IPRO" className="shadow-md" style={{ marginTop: "24px" }}>
        {renderResultDescription(
          data.tests.ipro.result,
          data.tests.ipro.test_taken_date
        )}
      </Card>

      {/* IProb */}
      <Card title="IPROB" className="shadow-md" style={{ marginTop: "24px" }}>
        {renderResultDescription(
          data.tests.iprob.result,
          data.tests.iprob.test_taken_date
        )}
      </Card>

      {/* IPros */}
      <Card title="IPROS" className="shadow-md" style={{ marginTop: "24px" }}>
        {renderResultDescription(
          data.tests.ipros.result,
          data.tests.ipros.test_taken_date
        )}
      </Card>
    </>
  );
};

export default DataView;
