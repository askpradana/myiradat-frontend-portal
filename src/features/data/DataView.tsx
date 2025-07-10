import { Card, Descriptions } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/id";

const UserTestCards = () => {
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
        { id: 0, comment: "Baik" },
        { id: 0, comment: "Baik" },
      ],
    },
    tests: {
      ipros: {
        test_taken_date: "2025-07-01",
        result: {
          hubugan_interpersonal: "Cukup Baik",
          kecepatan_perseptual: "Baik",
          kecerdasan_umun: "Sangat Baik",
          kemandirian: "Baik",
          ketangguhan: "Kurang",
          ketelitian_kerja: "Cukup",
          motivasi_berprestasi: "Tinggi",
          penalaran_non_verbal: "Baik",
          penalaran_numerik: "Baik",
          penalaran_verbal: "Sangat Baik",
          penyesuain_diri: "Baik",
          sistematika_kerja: "Cukup",
        },
      },
      iprob: {
        test_taken_date: "2025-07-01",
        result: {
          kecerdasan_umum: "Baik",
          daya_analisa_sintesa: "Cukup",
          daya_berpikir_abtrak: "Kurang",
          logika_berpikir: "Baik",
          kelincahan_pikir: "Baik",
          inisiatif: "Tinggi",
          perencanaan_dan_perorganisasian: "Cukup",
          sistematika_kerja: "Kurang",
          fleksibilitas: "Baik",
          daya_tahan_kerja_rutin: "Tinggi",
          daya_tahan_kerja_stress: "Sedang",
          stabilitas_emosi: "Baik",
          penyesuaian_diri: "Cukup",
          hubungan_interpersonal: "Kurang",
          kerjasama: "Baik",
          kepercayaan_diri: "Baik",
          kepemimpinan: "Sedang",
          pengambilan_keputusan: "Baik",
          motivasi_berprestasi: "Tinggi",
          komitmen_tugas: "Tinggi",
        },
      },
      ipro: {
        test_taken_date: "2025-07-01",
        result: {
          kecerdasan_umum: "Cukup",
          daya_analisa_sintesa: "Baik",
          daya_berpikir_abtrak: "Cukup",
          logika_berpikir: "Kurang",
          kelincahan_pikir: "Baik",
          inisiatif: "Sedang",
          perencanaan_dan_perorganisasian: "Kurang",
          sistematika_kerja: "Kurang",
          fleksibilitas: "Cukup",
          daya_tahan_kerja_rutin: "Baik",
          daya_tahan_kerja_stress: "Baik",
          stabilitas_emosi: "Baik",
          penyesuaian_diri: "Sedang",
          hubungan_interpersonal: "Cukup",
          kerjasama: "Kurang",
          kepercayaan_diri: "Tinggi",
          kepemimpinan: "Sedang",
          pengambilan_keputusan: "Cukup",
          motivasi_berprestasi: "Tinggi",
          komitmen_tugas: "Sedang",
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
      <Card
        title="IMPROVE CARE"
        className="shadow-md m-4"
      >
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

export default UserTestCards;
