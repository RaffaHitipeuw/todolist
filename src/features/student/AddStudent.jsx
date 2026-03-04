import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addStudent } from "./studentSlice";

export default function AddStudent() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      addStudent({
        nama,
        kelas,
        alamat
      })
    );
    navigate("/students");
  }

  return (
    <div>
      <h2>Tambah Siswa</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div>
          <label>Kelas:</label>
          <input
            type="text"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
          />
        </div>

        <div>
          <label>Alamat:</label>
          <input
            type="text"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
          />
        </div>

        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}