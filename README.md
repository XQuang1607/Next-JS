get list => get all | get with pagination get detail

next => người dùng đăng kí => đăng nhập => xem sản phẩm => chọn vào giỏ => xem giỏ => mua hàng => thanh toán.

customer => không SEO product => SEO cart => Không SEO order => Không SEO
product => SEO
cart => Không SEO
order => Không SEO

SEO được=> getServerSideProps | getStaticProps
Không SEO => Client side render => useEffect
useEffect => client side render

Get Detail get ME (thông tin của tôi) ID ID Quyền truy cập dữ liệu Quyền của người dùng
FE Get detail => id get my profile (token)

getStaticProps => server side render getStaticPaths => server side render

getServerSideProps => server side render
Phương thức getServerSideProps trong Next.js có thể thực hiện nhanh hoặc chậm tùy thuộc vào quy mô dữ liệu mà bạn đang xử lý trong hàm này và hiệu suất của máy chủ của bạn.Nếu bạn thực hiện một số tác vụ phức tạp hoặc truy vấn cơ sở dữ liệu lớn trong getServerSideProps, thì nó có thể mất nhiều thời gian để hoàn thành. Điều này có thể làm cho trang của bạn phản hồi chậm hơn và tăng thời gian tải trang.

SSR (server side render) CSR (client side render) SSR - SSG => useEffect => render mỗi lần request nhưng ở phía client SSR => getServerSideProps => render mỗi lần request nhưng ở phía server SSG => server side generation => getStaticProps => render lần khi build | lần đầu người dùng truy cập | revalidate => getStaticPath => render lần đầu build
