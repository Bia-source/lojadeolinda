package br.com.rd.ecommerce.services.client;

import br.com.rd.ecommerce.converters.Converter;
import br.com.rd.ecommerce.models.dto.ClientDTO;
import br.com.rd.ecommerce.models.entities.Client;

import br.com.rd.ecommerce.repositories.ClientRepository;
import br.com.rd.ecommerce.services.exceptions.CategoryException;
import br.com.rd.ecommerce.services.exceptions.ClientException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("ClientService")
public class ClientServiceImpl implements ClientService {
    @Autowired
    ClientRepository clientRepository;
    private Converter converter = new Converter();

    public ResponseEntity createClient(ClientDTO clientDTO){
        if(clientDTO == null)
            return ResponseEntity.badRequest().body(new ClientException("Usuario Invalido!"));
        Client client = converter.convertTo(clientDTO);
        Client clientReturn = clientRepository.save(client);
        return ResponseEntity.ok().body(clientReturn);
    }

    @Override
    public ResponseEntity findAllClient() {
        List<Client> clients = clientRepository.findAll();

        if(clients == null || clients.size() <= 0)
            return ResponseEntity.badRequest().body(new ClientException("Nenhum cliente encontrado"));
        List<ClientDTO> clientDTO = new ArrayList<>();
        for(Client client: clients)
            clientDTO.add(converter.convertTo(client));

        return ResponseEntity.ok().body(clientDTO);
    }

    @Override
    public ResponseEntity findClientById(Long id) {
        Client client = clientRepository.findById(id).get();
        if(client == null)
            return ResponseEntity.badRequest().body(new CategoryException("Nenhum dado encontrado"));
        ClientDTO clientDTO = converter.convertTo(client);
        return ResponseEntity.ok().body(clientDTO);
    }

    @Override
    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

    @Override
    public ResponseEntity findClientByEmail(String email) {
        if (email == null || email == "")
            return ResponseEntity.badRequest().body(new ClientException("Informe uma descricao"));
        Client clients = clientRepository.findByEmail(email);
        if (clients == null)
            return ResponseEntity.badRequest().body(new ClientException("Nenhum dado encontrado"));

        ClientDTO clientDTO = converter.convertTo(clients);
        return ResponseEntity.ok().body(clientDTO);
    }

    @Override
    public ResponseEntity findClientLogin(String email) {
        if (email == null || email == "")
            return ResponseEntity.badRequest().body(new ClientException("Informe uma descricao"));
        Client clients = clientRepository.findByEmail(email);
        if (clients == null)
            return ResponseEntity.badRequest().body(new ClientException("Nenhum dado encontrado"));

        ClientDTO clientDTO = converter.convertTo(clients);
        clientDTO.setPassword(clients.getPassword());
        return ResponseEntity.ok().body(clientDTO);
    }


}

